import { cms } from '@/commons/ajax'

// import { LectorList } from '@/constant/lector'

/**
 * 获取所有讲师信息
 */
export const getAllLector = () =>
  cms.get(`/user`)

/**
 * 新增一个讲师
 */
export const createLector = (lector: any) =>
  cms.post(`/user`, lector)

/**
 * 删除一个讲师
 */
export const deleteLector = (id: number) =>
  cms.delete(`/user`, { data: { id } })
