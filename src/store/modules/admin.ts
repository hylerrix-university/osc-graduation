import { getAllAdmin } from '@/api/admin'
import { AdminItem } from '@/model/admin'

interface AdminState {
  list: AdminItem[],
  loading: boolean
}

const state = {
  list: [], // AdminItem[]
  loading: false, // boolean
}

const getters = {
}

const actions = {
  async setAdminList({ commit }: any) {
    commit('LOADING_ADMIN_START')
    const { data }: any = await getAllAdmin()
    if (data) {
      commit('SET_ADMIN_LIST', data)
    }
    commit('LOADING_ADMIN_END', data)
  },
  // 重构：暂时不能正确将此函数绑定在 vuex 里直接调用
  // getOwnersNameByIds(context: any, owners: string) {
  //   const curOwenerList: string[] = []
  //   owners.split(',').forEach((id) => {
  //     const foundAdmin = context.state.list.find((admin: AdminItem) => admin.id === id)
  //     if (foundAdmin)  { curOwenerList.push(foundAdmin.username) }
  //   })
  //   return curOwenerList.join(', ')
  // },
}

const mutations = {
  ['LOADING_ADMIN_START']: (s: AdminState) => s.loading = true,
  ['SET_ADMIN_LIST']: (s: AdminState, data: AdminItem[]) => s.list = data,
  ['LOADING_ADMIN_END']: (s: AdminState) => s.loading = false,
}

const namespaced = true

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced,
}
