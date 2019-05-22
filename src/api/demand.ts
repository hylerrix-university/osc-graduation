import { osc } from '@/commons/ajax'

export const getDemandList = () =>
  osc.get(`/demand`)

export const createDemand = (item: any) =>
  osc.post(`/demand`, item)

export const deleteDemand = (id: number) =>
  osc.delete(`/demand`, { data: { id } })
