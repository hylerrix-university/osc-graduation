export interface OrgItem {
  id: string
  isParent: boolean
  name: string
  description: string
  owners: string
  pid: string,
}

export interface OrgTreeItem extends OrgItem {
  children: []
}

