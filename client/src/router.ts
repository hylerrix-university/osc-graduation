import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 通用页面
    {
      path: '/login',
      name: 'AppLogin',
      component: () => import('./app-login.vue'),
      meta: { title: '登录首页' },
    },
    {
      // 仪表盘暂时为首页，届时可以改为社区官网展示页为首页
      path: '/',
      name: 'AppDashboard',
      component: () => import('@/views/operator/app-dashboard/index.vue'),
      meta: { title: '运营人员仪表盘' },
    },
    {
      path: '/dashboard',
      name: 'AppDashboard',
      component: () => import('@/views/operator/app-dashboard/index.vue'),
      meta: { title: '运营人员仪表盘' },
    },
    // 核心运营管理
    {
      path: '/operator/core/org',
      name: 'CoreOrg',
      component: () => import('@/views/operator/core-org/index.vue'),
      meta: { title: '组织架构管理' },
    },
    {
      path: '/operator/core/admin',
      name: 'CoreAdmin',
      component: () => import('@/views/operator/core-admin/index.vue'),
      meta: { title: '运营人员管理' },
    },
    {
      path: '/operator/core/role',
      name: 'CoreRole',
      component: () => import('@/views/operator/core-role/index.vue'),
      meta: { title: '平台角色管理' },
    },
    {
      path: '/operator/core/menu',
      name: 'CoreMenu',
      component: () => import('@/views/operator/core-menu/index.vue'),
      meta: { title: '平台导航管理' },
    },
    {
      path: '/operator/core/card',
      name: 'CoreCard',
      component: () => import('@/views/operator/core-card/index.vue'),
      meta: { title: '平台卡片管理' },
    },
    // 社区服务管理
    {
      path: '/operator/service/chat',
      name: 'ServiceChat',
      component: () => import('@/views/operator/service-chat/index.vue'),
      meta: { title: '社区群聊管理' },
    },
    {
      path: '/operator/service/activity',
      name: 'ServiceActivity',
      component: () => import('@/views/operator/service-activity/index.vue'),
      meta: { title: '社区活动管理' },
    },
    {
      path: '/operator/service/project',
      name: 'ServiceProject',
      component: () => import('@/views/operator/service-project/index.vue'),
      meta: { title: '社区项目管理' },
    },
    // 社区建设管理
    {
      path: '/operator/external/member',
      name: 'ExternalMember',
      component: () => import('@/views/operator/external-member/index.vue'),
      meta: { title: '社区成员管理' },
    },
    {
      path: '/operator/external/notice',
      name: 'ExternalNotice',
      component: () => import('@/views/operator/external-notice/index.vue'),
      meta: { title: '社区公告管理' },
    },
    // 平台资源管理
    {
      path: '/operator/resource/platform',
      name: 'ResourcePlatform',
      component: () => import('@/views/operator/resource-platform/index.vue'),
      meta: { title: '三方平台管理' },
    },
    {
      path: '/operator/resource/entity',
      name: 'ResourceEntity',
      component: () => import('@/views/operator/resource-entity/index.vue'),
      meta: { title: '实体物资管理' },
    },
    {
      path: '/operator/resource/account',
      name: 'ResourceAccount',
      component: () => import('@/views/operator/resource-account/index.vue'),
      meta: { title: '虚拟账号管理' },
    },
    {
      path: '/operator/resource/file',
      name: 'ResourceFile',
      component: () => import('@/views/operator/resource-file/index.vue'),
      meta: { title: '线上账号管理' },
    },
    {
      path: '/operator/resource/asset',
      name: 'ResourceAsset',
      component: () => import('@/views/operator/resource-asset/index.vue'),
      meta: { title: '金融资产管理' },
    },
    // 平台建设管理
    {
      path: '/operator/internal/lector',
      name: 'InternalLector',
      component: () => import('@/views/operator/internal-lector/index.vue'),
      meta: { title: '社区讲师管理' },
    },
    {
      path: '/operator/internal/yard',
      name: 'InternalYard',
      component: () => import('@/views/operator/internal-yard/index.vue'),
      meta: { title: '社区场地管理' },
    },
    {
      path: '/operator/internal/sponsor',
      name: 'InternalSponsor',
      component: () => import('@/views/operator/internal-sponsor/index.vue'),
      meta: { title: '社区赞助管理' },
    },
    {
      path: '/operator/internal/topic',
      name: 'InternalTopic',
      component: () => import('@/views/operator/internal-topic/index.vue'),
      meta: { title: '分享主题管理' },
    },
    {
      path: '/operator/internal/unit',
      name: 'InternalUnit',
      component: () => import('@/views/operator/internal-unit/index.vue'),
      meta: { title: '入驻单位管理' },
    },
    {
      path: '/operator/internal/college',
      name: 'InternalCollege',
      component: () => import('@/views/operator/internal-college/index.vue'),
      meta: { title: '校园联盟管理' },
    },
    // 平台文档管理
    {
      path: '/operator/doc/dictionary',
      name: 'DocDictionary',
      component: () => import('@/views/operator/doc-dictionary/index.vue'),
      meta: { title: '数据字典管理' },
    },
    {
      path: '/operator/doc/log',
      name: 'DocLog',
      component: () => import('@/views/operator/doc-log/index.vue'),
      meta: { title: '操作日志管理' },
    },
    {
      path: '/operator/doc/report',
      name: 'DocReport',
      component: () => import('@/views/operator/doc-report/index.vue'),
      meta: { title: '月度报告管理' },
    },
    {
      path: '/operator/doc/history',
      name: 'DocHistory',
      component: () => import('@/views/operator/doc-history/index.vue'),
      meta: { title: '发展历史管理' },
    },
    {
      path: '/operator/doc/demand',
      name: 'DocDemand',
      component: () => import('@/views/operator/doc-demand/index.vue'),
      meta: { title: '社区需求管理' },
    },
    {
      path: '/operator/doc/article',
      name: 'DocArticle',
      component: () => import('@/views/operator/doc-article/index.vue'),
      meta: { title: '社区文章管理管理' },
    },
    // 运营人员中心
    {
      path: '/operator/admin/profile',
      name: 'AdminProfile',
      component: () => import('@/views/operator/admin-profile/index.vue'),
      meta: { title: '个人资料管理' },
    },
    {
      path: '/operator/admin/custom',
      name: 'AdminCustom',
      component: () => import('@/views/operator/admin-custom/index.vue'),
      meta: { title: '平台定制管理' },
    },
    {
      path: '/operator/admin/task',
      name: 'AdminTask',
      component: () => import('@/views/operator/admin-task/index.vue'),
      meta: { title: '个人任务管理' },
    },
  ],
})



/**
 * 全局路由守卫
 */
router.beforeEach((to: any, from: any, next: any) => {
  // const nextRoute = ['home', 'good-list', 'good-detail', 'cart', 'profile']
  // let isLogin = global.isLogin  // 是否登录
  // // 未登录状态；当路由到 nextRoute 指定页时，跳转至login
  // if (nextRoute.indexOf(to.name) >= 0) {
  //   if (!isLogin) {
  //     console.log('what fuck')
  //     router.push({ name: 'login' })
  //   }
  // }
  // // 已登录状态；当路由到 login 时，跳转至 home
  // if (to.name === 'login') {
  //   if (isLogin) {
  //     router.push({ name: 'home' })
  //   }
  // }
  next()
})

export default router
