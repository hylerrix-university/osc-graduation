import { osc } from '@/commons/ajax'

export const getUnitList = () =>
  osc.get(`/unit`)

export const createUnit = (item: any) =>
  osc.post(`/unit`, item)

export const deleteUnit = (id: number) =>
  osc.delete(`/unit`, { data: { id } })
