import { osc } from '@/commons/ajax'
// import { PlatformList } from '@/constant/platform'

export const getPlatformList = () =>
  osc.get(`platform`)

export const createPlatform = (role: any) =>
  osc.post(`platform`, role)

export const deletePlatform = (id: number) =>
  osc.delete(`/platform`, { data: { id } })
