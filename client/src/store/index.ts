import Vue from 'vue'
import Vuex from 'vuex'
import auth from './commons/auth'
import nav from './modules/nav'
import org from './modules/org'
import admin from './modules/admin'
import lector from './modules/lector'
import platform from './modules/platform'
import role from './modules/role'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    nav,
    org,
    admin,
    lector,
    platform,
    role,
  },

  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
