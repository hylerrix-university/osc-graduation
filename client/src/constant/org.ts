import { OrgItem } from '@/model/org'

// 重构：这里粘贴 nav 的数据到 org 中
export const OrgList: OrgItem[] = [
  {
    id: 1,
    code: '000001',
    name: '城市拓展部',
    owner: '1',
    remark: '',
    isParent: 1,
    pid: '000',
  },
  {
    id: 2,
    code: '000002',
    isParent: 1,
    name: '文案媒体部',
    remark: '',
    owner: '1',
    pid: '000',
  },
  {
    id: 3,
    code: '000003',
    isParent: 1,
    name: '社区运营部',
    remark: '',
    owner: '1',
    pid: '000',
  },
  {
    id: 4,
    code: '000004',
    isParent: 1,
    name: '人力资源部',
    remark: '',
    owner: '1',
    pid: '000',
  },
  {
    id: 5,
    code: '000005',
    isParent: 1,
    name: '开源项目部',
    remark: '',
    owner: '1',
    pid: '000',
  },
  {
    id: 6,
    code: '000006',
    isParent: 1,
    name: '志愿者团队',
    remark: '',
    owner: '2',
    pid: '000',
  },
]
