import { getPlatformList } from '@/api/platform'
import { PlatformItem } from '@/model/platform'

interface PlatformState {
  list: PlatformItem[]
  loading: boolean
}

const state = {
  list: [], // PlatformItem[]
  loading: false, // boolean
}

const getters = {
}

const actions = {
  async setPlatformList({ commit }: any) {
    commit('LOADING_PLATFORM_START')
    const { data }: any = await getPlatformList()
    if (data) {
      commit('SET_PLATFORM_LIST', data)
    }
    commit('LOADING_PLATFORM_END')
  },
}

const mutations = {
  ['LOADING_PLATFORM_START']: (s: PlatformState) => s.loading = true,
  ['SET_PLATFORM_LIST']: (s: PlatformState, data: PlatformItem[]) => s.list = data,
  ['LOADING_PLATFORM_END']: (s: PlatformState) => s.loading = false,
}

const namespaced = true

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced,
}
