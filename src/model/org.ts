export interface OrgItem {
  id: string,
  isParent: boolean,
  path: string,
  name: string,
  icon: string,
  description: string,
  pid: string,
}

export interface OrgTreeItem extends OrgItem {
  children: [],
}

