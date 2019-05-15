import { cms } from '@/commons/ajax'
// import { ActivityList } from '@/constant/activity'

export const getActivityList = () =>
  cms.get(`/activity`)

export const createActivity = (item: any) =>
  cms.post(`/activity`, item)

export const deleteActivity = (id: number) =>
  cms.delete(`/activity`, { data: { id } })
