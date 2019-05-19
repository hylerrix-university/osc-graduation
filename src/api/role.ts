import { osc } from '@/commons/ajax'
// import { RoleList } from '@/constant/role'

export const getAllRole = () =>
  osc.get(`role`)

export const createRole = (role: any) =>
  osc.post(`role`, role)

export const deleteRole = (id: number) =>
  osc.delete(`/role`, { data: { id } })
