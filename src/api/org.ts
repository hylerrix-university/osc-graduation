import { osc } from '@/commons/ajax'
import { CreateOrgItem, DeleteOrgItem } from '@/model/org'
// import { OrgList } from '@/constant/org'

/**
 * 获取组织架构列表
 */
export const getOrgList = () =>
  osc.get(`/org`)

/**
 * 新增一个组织
 */
export const createOrg = (orgItem: CreateOrgItem) =>
  osc.post(`/org`, orgItem)

/**
 * 删除一个组织
 */
export const deleteOrg = (id: DeleteOrgItem) =>
  osc.delete(`/org`, { data: { id } })
