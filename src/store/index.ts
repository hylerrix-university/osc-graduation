import Vue from 'vue'
import Vuex from 'vuex'
import nav from './modules/nav'
import org from './modules/org'
import admin from './modules/admin'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    nav,
    org,
    admin,
  },

  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
