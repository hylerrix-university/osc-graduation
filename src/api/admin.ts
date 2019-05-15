import { cms } from '@/commons/ajax'
import { CreateAdminItem, DeleteAdminItem } from '@/model/admin'

// import { AdminList } from '@/constant/admin'

/**
 * 获取所有人员信息
 */
export const getAllAdmin = () =>
  cms.get(`/admin`)

/**
 * 新增一个人员
 */
export const createAdmin = (admin: CreateAdminItem) =>
  cms.post(`/admin`, admin)

/**
 * 删除一个人员
 */
export const deleteAdmin = (id: DeleteAdminItem) =>
  cms.delete(`/admin`, { data: { id } })
