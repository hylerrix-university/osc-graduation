import { osc } from '@/commons/ajax'
// import { EntityList } from '@/constant/entity'

export const getEntityList = () =>
  osc.get(`/entity`)

export const createEntity = (item: any) =>
  osc.post(`/entity`, item)

export const deleteEntity = (id: number) =>
  osc.delete(`/entity`, { data: { id } })
