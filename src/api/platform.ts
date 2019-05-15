import { cms } from '@/commons/ajax'
// import { PlatformList } from '@/constant/platform'

export const getPlatformList = () =>
  cms.get(`platform`)

export const createPlatform = (role: any) =>
  cms.post(`platform`, role)

export const deletePlatform = (id: number) =>
  cms.delete(`/platform`, { data: { id } })
