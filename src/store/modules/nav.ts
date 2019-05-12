import { getNavList } from '@/api/nav'
import { RouterItem } from '@/model/base/vue-router'
import { NavItem } from '@/model/common/nav'
import { ProductTreeItem } from '@/model/common/tree'

interface NavState {
  list: NavItem[],
  loading: boolean
}

const state = {
  list: [], // NavItem[]
  loading: false, // boolean
  curNav: {}, // NavItem
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
      return { ...nav, children: [] }
    })
    tempNavTree.forEach((curNav: any) => {
      const childNavArr: any = []
      // 组装所有子节点
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
  async setNavList({ commit }: any) {
    commit('LOADING_NAV_START')
    const { data }: any = await getNavList()
    if (data) {
      // commit('SET_NAV_LIST', data)
      commit('SET_FILTER_NAV_LIST', data)
    }
    commit('LOADING_NAV_END', data)
  },
}

const mutations = {
  ['LOADING_NAV_START']: (s: NavState) => s.loading = true,
  ['SET_NAV_LIST']: (s: NavState, data: NavItem[]) => s.list = data,
  ['SET_FILTER_NAV_LIST']: (s: NavState, data: NavItem[]) =>
    s.list = data.filter((nav) => nav.status !== 'DISABLED'),
  ['LOADING_NAV_END']: (s: NavState) => s.loading = false,
}

const namespaced = true

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced,
}
