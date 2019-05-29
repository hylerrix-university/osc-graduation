import { login } from '@/api/auth'

interface AuthState {
  identity: any,
  loading: boolean
}

const state = {
  identity: {}, // AuthItem[]
  loading: false, // boolean
}

const getters = {
}

const actions = {
  async login({ commit }: any, loginFrom: any) {
    commit('LOADING_START')
    const { data }: any = await login(loginFrom)
    if (data) {
      commit('LOGIN', data)
    }
    commit('LOADING_END')
  },
  async logout({ commit }: any) {
    commit('LOGOUT')
  },
}

const mutations = {
  ['LOADING_START']: (s: AuthState) => s.loading = true,
  ['LOGIN']: (s: AuthState, data: any) => s.identity = data,
  ['LOGOUT']: (s: AuthState) => s.identity = {},
  ['LOADING_END']: (s: AuthState) => s.loading = false,
}

const namespaced = true

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced,
}
