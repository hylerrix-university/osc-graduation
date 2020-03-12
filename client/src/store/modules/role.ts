import { getAllRole } from '@/api/role'
import { RoleItem } from '@/model/role'

interface RoleState {
  list: RoleItem[],
  loading: boolean
}

const state = {
  list: [], // RoleItem[]
  loading: false, // boolean
}

const getters = {
}

const actions = {
  async setRoleList({ commit }: any) {
    commit('LOADING_ROLE_START')
    const { data }: any = await getAllRole()
    if (data) {
      commit('SET_ROLE_LIST', data)
    }
    commit('LOADING_ROLE_END', data)
  },
}

const mutations = {
  ['LOADING_ROLE_START']: (s: RoleState) => s.loading = true,
  ['SET_ROLE_LIST']: (s: RoleState, data: RoleItem[]) => s.list = data,
  ['LOADING_ROLE_END']: (s: RoleState) => s.loading = false,
}

const namespaced = true

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced,
}
