// import { cms } from '@/commons/ajax'
import { OrgList } from '@/constant/org'

/**
 * 根据加密用户名获取组织架构列表
 */
export const getOrgList = () => Promise.resolve({
  data: [...OrgList],
  success: true,
})
