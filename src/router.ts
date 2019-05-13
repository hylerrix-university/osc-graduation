import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 通用页面
    {
      path: '/',
      name: 'AppDashboard',
      component: () => import('@/views/app-dashboard/index.vue'),
      meta: { title: '仪表盘' },
    },
    // 核心运营管理
    {
      path: '/core/org',
      name: 'CoreOrg',
      component: () => import('@/views/core-org/index.vue'),
      meta: { title: '组织架构管理' },
    },
    {
      path: '/core/admin',
      name: 'CoreAdmin',
      component: () => import('@/views/core-admin/index.vue'),
      meta: { title: '运营人员管理' },
    },
    {
      path: '/core/role',
      name: 'CoreRole',
      component: () => import('@/views/core-role/index.vue'),
      meta: { title: '平台角色管理' },
    },
    {
      path: '/core/menu',
      name: 'CoreMenu',
      component: () => import('@/views/core-menu/index.vue'),
      meta: { title: '平台导航管理' },
    },
    {
      path: '/core/card',
      name: 'CoreCard',
      component: () => import('@/views/core-card/index.vue'),
      meta: { title: '平台卡片管理' },
    },
    // 社区服务管理
    {
      path: '/service/activity/third',
      name: 'ServiceActivityThird',
      component: () => import('@/views/service-activity-third/index.vue'),
      meta: { title: '三方活动管理' },
    },
    {
      path: '/service/recruit/third',
      name: 'ServiceRecruitThird',
      component: () => import('@/views/service-recruit-third/index.vue'),
      meta: { title: '三方招聘管理' },
    },
    {
      path: '/service/form/third',
      name: 'ServiceFormThird',
      component: () => import('@/views/service-form-third/index.vue'),
      meta: { title: '三方表单管理' },
    },
    {
      path: '/service/chat',
      name: 'ServiceChat',
      component: () => import('@/views/service-chat/index.vue'),
      meta: { title: '社区群聊管理' },
    },
    {
      path: '/service/activity',
      name: 'ServiceActivity',
      component: () => import('@/views/service-activity/index.vue'),
      meta: { title: '社区活动管理' },
    },
    {
      path: '/service/project',
      name: 'ServiceProject',
      component: () => import('@/views/service-project/index.vue'),
      meta: { title: '社区项目管理' },
    },
    // 社区建设管理
    {
      path: '/external/member',
      name: 'ExternalMember',
      component: () => import('@/views/external-member/index.vue'),
      meta: { title: '社区成员管理' },
    },
    {
      path: '/external/notice',
      name: 'ExternalNotice',
      component: () => import('@/views/external-notice/index.vue'),
      meta: { title: '社区公告管理' },
    },
    // 平台资源管理
    {
      path: '/resource/platform',
      name: 'ResourcePlatform',
      component: () => import('@/views/resource-platform/index.vue'),
      meta: { title: '三方平台管理' },
    },
    {
      path: '/resource/entity',
      name: 'ResourceEntity',
      component: () => import('@/views/resource-entity/index.vue'),
      meta: { title: '实体物资管理' },
    },
    {
      path: '/resource/account',
      name: 'ResourceAccount',
      component: () => import('@/views/resource-account/index.vue'),
      meta: { title: '虚拟账号管理' },
    },
    {
      path: '/resource/file',
      name: 'ResourceFile',
      component: () => import('@/views/resource-file/index.vue'),
      meta: { title: '线上账号管理' },
    },
    {
      path: '/resource/asset',
      name: 'ResourceAsset',
      component: () => import('@/views/resource-asset/index.vue'),
      meta: { title: '金融资产管理' },
    },
    // 平台建设管理
    {
      path: '/internal/lector',
      name: 'InternalLector',
      component: () => import('@/views/internal-lector/index.vue'),
      meta: { title: '社区讲师管理' },
    },
    {
      path: '/internal/yard',
      name: 'InternalYard',
      component: () => import('@/views/internal-yard/index.vue'),
      meta: { title: '社区场地管理' },
    },
    {
      path: '/internal/sponsor',
      name: 'InternalSponsor',
      component: () => import('@/views/internal-sponsor/index.vue'),
      meta: { title: '社区赞助管理' },
    },
    // 平台文档管理
    {
      path: '/doc/dictionary',
      name: 'DocDictionary',
      component: () => import('@/views/doc-dictionary/index.vue'),
      meta: { title: '数据字典管理' },
    },
    {
      path: '/doc/log',
      name: 'DocLog',
      component: () => import('@/views/doc-log/index.vue'),
      meta: { title: '操作日志管理' },
    },
    // 运营人员中心
    {
      path: '/admin/profile',
      name: 'AdminProfile',
      component: () => import('@/views/admin-profile/index.vue'),
      meta: { title: '个人资料管理' },
    },
    {
      path: '/admin/custom',
      name: 'AdminCustom',
      component: () => import('@/views/admin-custom/index.vue'),
      meta: { title: '平台定制管理' },
    },
  ],
})



/**
 * 全局路由守卫
 */
router.beforeEach((to: any, from: any, next: any) => {
  // const nextRoute = ['home', 'good-list', 'good-detail', 'cart', 'profile']
  // let isLogin = global.isLogin;  // 是否登录
  // // 未登录状态；当路由到 nextRoute 指定页时，跳转至login
  // if (nextRoute.indexOf(to.name) >= 0) {
  //   if (!isLogin) {
  //     console.log('what fuck');
  //     router.push({ name: 'login' })
  //   }
  // }
  // // 已登录状态；当路由到 login 时，跳转至 home
  // if (to.name === 'login') {
  //   if (isLogin) {
  //     router.push({ name: 'home' })
  //   }
  // }
  next();
})

export default router
