import { AdminItem } from './admin'
import { NavItem } from './nav'

export interface RoleItem {
  id: number
  name: string
  status: number
  remark: string,
  admins: AdminItem[],
  menus: NavItem[],
}
