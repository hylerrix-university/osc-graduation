import Vue from 'vue'
import Vuex from 'vuex'
import nav from './modules/nav'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { nav },

  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
