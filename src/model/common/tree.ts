import { NavItem } from '@/model/common/nav'

export interface ProductTreeItem extends NavItem {
  // ...
  children: [],
}

export interface NodeAuthItem {
  group: string,
  path: string,
  type: string,
}
