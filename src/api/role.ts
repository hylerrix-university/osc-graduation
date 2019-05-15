import { cms } from '@/commons/ajax'
// import { RoleList } from '@/constant/role'

export const getAllRole = () =>
  cms.get(`role`)

export const createRole = (role: any) =>
  cms.post(`role`, role)

export const deleteRole = (id: number) =>
  cms.delete(`/role`, { data: { id } })
