import { OrgItem } from '@/model/org'

// 重构：这里粘贴 nav 的数据到 org 中
export const OrgList: OrgItem[] = [
  {
    id: '000001',
    isParent: true,
    name: '城市拓展部',
    description: '',
    owners: '1',
    pid: '000',
  },
  {
    id: '000002',
    isParent: true,
    name: '文案媒体部',
    description: '',
    owners: '1,2',
    pid: '000',
  },
  {
    id: '000003',
    isParent: true,
    name: '社区运营部',
    description: '',
    owners: '1,2',
    pid: '000',
  },
  {
    id: '000004',
    isParent: true,
    name: '人力资源部',
    description: '',
    owners: '1,2',
    pid: '000',
  },
  {
    id: '000005',
    isParent: true,
    name: '开源项目部',
    description: '',
    owners: '1,2',
    pid: '000',
  },
  {
    id: '000006',
    isParent: true,
    name: '志愿者团队',
    description: '',
    owners: '2',
    pid: '000',
  },
]
