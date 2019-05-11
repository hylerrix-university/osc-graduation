import { getOrgList } from '@/api/org'
import { OrgItem } from '@/model/org'
import { OrgTreeItem } from '@/model/org'

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
  orgTree: (s: OrgState) => {
    return s.list.map((org) => {
      return { ...org, children: [] }
    })
  },
}

const actions = {
  async setOrgList({ commit }: any) {
    commit('LOADING_ORG_START')
    const { data }: any = await getOrgList()
    if (data) {
      commit('SET_ORG_LIST', data)
    }
    commit('LOADING_ORG_END', data)
  },
}

const mutations = {
  ['LOADING_ORG_START']: (s: OrgState) => s.loading = true,
  ['SET_ORG_LIST']: (s: OrgState, data: OrgItem[]) => s.list = data,
  ['LOADING_ORG_END']: (s: OrgState) => s.loading = false,
}

const namespaced = true

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced,
}
