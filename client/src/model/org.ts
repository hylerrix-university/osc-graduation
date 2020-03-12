export interface OrgItem {
  id: number
  code: string
  name: string
  owner: string
  remark: string
  isParent: number
  pid: string
}

export interface CreateOrgItem {
  code: string
  name: string
  owner: number
  remark: string
}

export interface DeleteOrgItem {
  id: number
}
