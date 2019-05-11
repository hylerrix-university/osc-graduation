export interface OrgItem {
  id: string,
  isParent: boolean,
  name: string,
  description: string,
  owner: string,
  pid: string,
}

export interface OrgTreeItem extends OrgItem {
  children: [],
}

