import { cms } from '@/commons/ajax'
import { CreateOrgItem, DeleteOrgItem } from '@/model/org'
// import { OrgList } from '@/constant/org'

/**
 * 获取组织架构列表
 */
export const getOrgList = () =>
  cms.get(`/org`)

/**
 * 新增一个组织
 */
export const createOrg = (orgItem: CreateOrgItem) =>
  cms.post(`/org`, orgItem)

/**
 * 删除一个组织
 */
export const deleteOrg = (orgItem: DeleteOrgItem) =>
  cms.delete(`/org`, { data: { code: orgItem } })
