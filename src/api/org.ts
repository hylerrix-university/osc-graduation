import { cms } from '@/commons/ajax'
import { CreateOrgItem } from '@/model/org'
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
