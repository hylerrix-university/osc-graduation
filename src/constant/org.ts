import { OrgItem } from '@/model/org'

// 重构：这里粘贴 nav 的数据到 org 中
export const OrgList: OrgItem[] = [
  {
    id: '0',
    isParent: true,
    path: '/',
    name: '前端组',
    icon: 'dashboard',
    description: '',
    pid: '000',
  },
  {
    id: '1',
    isParent: true,
    path: '/',
    name: '后端组',
    icon: 'dashboard',
    description: '',
    pid: '000',
  },
  {
    id: '2',
    isParent: true,
    path: '/',
    name: '产品组',
    icon: 'dashboard',
    description: '',
    pid: '000',
  },
  {
    id: '3',
    isParent: true,
    path: '/',
    name: '运营组',
    icon: 'dashboard',
    description: '',
    pid: '000',
  },
  {
    id: '4',
    isParent: true,
    path: '/',
    name: '视觉组',
    icon: 'dashboard',
    description: '',
    pid: '000',
  },
]
