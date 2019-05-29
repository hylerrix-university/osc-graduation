import { osc } from '@/commons/ajax'

// import { LectorList } from '@/constant/lector'

/**
 * 获取所有讲师信息
 */
export const getAllLector = () =>
  osc.get(`/user`)

/**
 * 新增一个讲师
 */
export const createLector = (lector: any) =>
  osc.post(`/user`, lector)

/**
 * 保存一个讲师
 */
export const updateLector = (admin: any) =>
  osc.put(`/user`, admin)

/**
 * 删除一个讲师
 */
export const deleteLector = (id: number) =>
  osc.delete(`/user`, { data: { id } })
