import { osc } from '@/commons/ajax'
// import { ActivityList } from '@/constant/activity'

export const getActivityList = () =>
  osc.get(`/activity`)

export const createActivity = (item: any) =>
  osc.post(`/activity`, item)

export const deleteActivity = (id: number) =>
  osc.delete(`/activity`, { data: { id } })
