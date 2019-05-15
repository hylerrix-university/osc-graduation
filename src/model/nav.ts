export interface NavItem {
    id: string
    pid: string
    name: string
    path: string
    isParent: boolean
    status: string
    remark: string
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
