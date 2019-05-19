import { osc } from '@/commons/ajax'
// import { YardList } from '@/constant/yard'

export const getYardList = () =>
  osc.get(`yard`)

export const createYard = (role: any) =>
  osc.post(`yard`, role)

export const deleteYard = (id: number) =>
  osc.delete(`/yard`, { data: { id } })
