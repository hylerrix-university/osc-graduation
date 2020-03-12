import { osc } from '@/commons/ajax'
import { CreateAdminItem, UpdateAdminItem, DeleteAdminItem } from '@/model/admin'

// import { AdminList } from '@/constant/admin'

/**
 * 获取所有人员信息
 */
export const getAllAdmin = () =>
  osc.get(`/admin`)

/**
 * 新增一个人员
 */
export const createAdmin = (admin: CreateAdminItem) =>
  osc.post(`/admin`, admin)

/**
 * 保存一个人员
 */
export const updateAdmin = (admin: UpdateAdminItem) =>
  osc.put(`/admin`, admin)

/**
 * 删除一个人员
 */
export const deleteAdmin = (id: DeleteAdminItem) =>
  osc.delete(`/admin`, { data: { id } })
