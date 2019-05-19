import { osc } from '@/commons/ajax'
// import { NavList } from '@/constant/nav'
import { CreateNavItem } from '@/model/nav'

/**
 * 获取导航
 */
export const getNavList = () =>
  osc.get(`/menu`)

/**
 * 新增导航
 */
export const createNav = (navItem: CreateNavItem) =>
  osc.post(`menu`, navItem)

/**
 * 删除导航
 */
export const deleteNav = (id: number) =>
  osc.delete(`/menu`, { data: { id } })
