import { getOrgList } from '@/api/org'
import { OrgItem } from '@/model/org'

interface OrgState {
  list: OrgItem[],
  loading: boolean
}

const state = {
  list: [], // OrgItem[]
  loading: false, // boolean
  curOrg: {}, // OrgItem
}

const getters = {
  // 暂不支持多级组织
}

const actions = {
  async setOrgList({ commit }: any) {
    commit('LOADING_START')
    const {rows}: any = await getOrgList()
    if (rows) {
      commit('SET_ORG_LIST', rows)
    }
    commit('LOADING_END', rows)
  },
}

const mutations = {
  ['LOADING_START']: (s: OrgState) => s.loading = true,
  ['SET_ORG_LIST']: (s: OrgState, data: OrgItem[]) => s.list = data,
  ['LOADING_END']: (s: OrgState) => s.loading = false,
}

const namespaced = true

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced,
}
