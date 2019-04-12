import { NavItem } from '@/model/nav'

export const NavList: NavItem[] = [
  // 通用页面
  {
    path: '/',
    name: 'AppDashboard',
    title: '仪表盘',
    icon: 'dashboard',
  },
  // 核心运营管理
  {
    path: '/core/org',
    name: 'CoreOrg',
    title: '组织架构管理',
    icon: 'dashboard',
  },
  {
    path: '/core/admin',
    name: 'CoreAdmin',
    title: '运营人员管理',
    icon: 'dashboard',
  },
  {
    path: '/core/role',
    name: 'CoreRole',
    title: '平台角色管理',
    icon: 'dashboard',
  },
  {
    path: '/core/menu',
    name: 'CoreMenu',
    title: '平台导航管理',
    icon: 'dashboard',
  },
  {
    path: '/core/card',
    name: 'CoreCard',
    title: '平台卡片管理',
    icon: 'dashboard',
  },
  // 社区服务管理
  {
    path: '/service/activity/third',
    name: 'ServiceActivityThird',
    title: '三方活动管理',
    icon: 'dashboard',
  },
  {
    path: '/service/recruit/third',
    name: 'ServiceRecruitThird',
    title: '三方招聘管理',
    icon: 'dashboard',
  },
  {
    path: '/service/chat/third',
    name: 'ServiceChatThird',
    title: '三方群聊管理',
    icon: 'dashboard',
  },
  {
    path: '/service/form/third',
    name: 'ServiceFormThird',
    title: '三方表单管理',
    icon: 'dashboard',
  },
  // 社区建设管理
  {
    path: '/external/member',
    name: 'ExternalMember',
    title: '社区成员管理',
    icon: 'dashboard',
  },
  {
    path: '/external/notice',
    name: 'ExternalNotice',
    title: '社区公告管理',
    icon: 'dashboard',
  },
  // 平台资源管理
  {
    path: '/resource/platform',
    name: 'ResourcePlatform',
    title: '三方平台管理',
    icon: 'dashboard',
  },
  {
    path: '/resource/entity',
    name: 'ResourceEntity',
    title: '实体物资管理',
    icon: 'dashboard',
  },
  {
    path: '/resource/account',
    name: 'ResourceAccount',
    title: '虚拟账号管理',
    icon: 'dashboard',
  },
  {
    path: '/resource/file',
    name: 'ResourceFile',
    title: '线上账号管理',
    icon: 'dashboard',
  },
  {
    path: '/resource/asset',
    name: 'ResourceAsset',
    title: '金融资产管理',
    icon: 'dashboard',
  },
  // 平台建设管理
  {
    path: '/internal/lector',
    name: 'InternalLector',
    title: '社区讲师管理',
    icon: 'dashboard',
  },
  {
    path: '/internal/yard',
    name: 'InternalYard',
    title: '社区场地管理',
    icon: 'dashboard',
  },
  {
    path: '/internal/sponsor',
    name: 'InternalSponsor',
    title: '社区赞助管理',
    icon: 'dashboard',
  },
  // 平台文档管理
  {
    path: '/doc/dictionary',
    name: 'DocDictionary',
    title: '数据字典管理',
    icon: 'dashboard',
  },
  {
    path: '/doc/operate',
    name: 'DocOperate',
    title: '操作日志管理',
    icon: 'dashboard',
  },
  // 运营人员中心
  {
    path: '/admin/profile',
    name: 'AdminProfile',
    title: '个人资料管理',
    icon: 'dashboard',
  },
  {
    path: '/admin/custom',
    name: 'AdminCustom',
    title: '平台定制管理',
    icon: 'dashboard',
  },
]
