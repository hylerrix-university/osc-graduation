import { cms } from '@/commons/ajax'
// import { YardList } from '@/constant/yard'

export const getYardList = () =>
  cms.get(`yard`)

export const createYard = (role: any) =>
  cms.post(`yard`, role)

export const deleteYard = (id: number) =>
  cms.delete(`/yard`, { data: { id } })
