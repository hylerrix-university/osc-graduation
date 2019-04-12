import Vue from 'vue'
import Router from 'vue-router'
import AppDashboard from '@/views/app-dashboard/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      name: 'AppDashboard',
      component: AppDashboard,
    },
  ],
})
