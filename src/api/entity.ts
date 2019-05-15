import { cms } from '@/commons/ajax'
// import { EntityList } from '@/constant/entity'

export const getEntityList = () =>
  cms.get(`/entity`)

export const createEntity = (item: any) =>
  cms.post(`/entity`, item)

export const deleteEntity = (id: number) =>
  cms.delete(`/entity`, { data: { id } })
