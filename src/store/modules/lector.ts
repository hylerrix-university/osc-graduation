import { getAllLector } from '@/api/lector'
import { LectorItem } from '@/model/lector'

interface LectorState {
  list: LectorItem[],
  loading: boolean
}

const state = {
  list: [], // LectorItem[]
  loading: false, // boolean
}

const getters = {
}

const actions = {
  async setLectorList({ commit }: any) {
    commit('LOADING_LECTOR_START')
    // const { data }: any = await getAllLector()
    const { data }: any = await getAllLector()
    if (data) {
      commit('SET_LECTOR_LIST', data)
    }
    commit('LOADING_LECTOR_END', data)
  },
}

const mutations = {
  ['LOADING_LECTOR_START']: (s: LectorState) => s.loading = true,
  ['SET_LECTOR_LIST']: (s: LectorState, data: LectorItem[]) => s.list = data,
  ['LOADING_LECTOR_END']: (s: LectorState) => s.loading = false,
}

const namespaced = true

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced,
}
