export interface NavItem {
  id: number
  code: string
  name: string
  path: string
  status: number
  remark: string
  isParent: number
  pid: string
}

// 重构：这里假装后台返回的列表里没有 children 都是扁平化的
// 最后考虑改为直接返回包含 children 的，或者分别为两个接口
// 重构，不需要 common/tree.ts 考虑放在 nav 里
export interface ProductTreeItem extends NavItem {
  // ...
  children: []
}

export interface NodeAuthItem {
  group: string
  path: string
  type: string
}

export interface CreateNavItem {
  name: string
  path: string
  pid: string
  status: string
  isParent: number
  remark: string
}
