import { getNavList } from '@/api/nav'
import { NavItem } from '@/model/common/nav'
import { ProductTreeItem } from '@/model/common/tree'

interface NavState {
  list: NavItem[],
  loading: boolean
}

const state = {
  list: [],
  loading: false,
}

const getters = {
  // 分别获取一、二级导航
  nav1: (s: NavState) => s.list.filter((i: NavItem) => i.id.length === 6),
  nav2: (s: NavState) => s.list.filter((i) => i.id.length === 9),
  // 拼装 children，获取层次化分明的导航
  // 重构：这里只支持一二级导航的生成
  navTree: (s: NavState) => {
    let tempNavTree: ProductTreeItem[] = []
    tempNavTree = s.list.map((nav) => {
      return {
        ...nav,
        children: [],
      }
    })
    tempNavTree.forEach((curNav: any) => {
      const childNavArr: any = []
      // 寻找所有子节点
      // 由于有 splice 方法这里采用普通 for 循环
      for (let i = 0; i < tempNavTree.length; i++) {
        const nextNav = tempNavTree[i]
        if (nextNav.pid === curNav.id) {
          childNavArr.push(nextNav)
          tempNavTree.splice(i--, 1)
        }
      }
      curNav.children = childNavArr
    })
    return tempNavTree
  },
}

const actions = {
  async getNavList({commit}: any) {
    commit('LOADING_START')
    const {rows}: any = await getNavList()
    if (rows) {
      commit('SET_NAV_LIST', rows)
    }
    commit('LOADING_END', rows)
  },
}

const mutations = {
  ['LOADING_START']: (s: NavState) => s.loading = true,
  ['LOADING_END']: (s: NavState) => s.loading = false,
  ['SET_NAV_LIST']: (s: NavState, data: NavItem[]) => s.list = data,
}

const namespaced = true

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced,
}
