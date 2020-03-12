import { osc } from '@/commons/ajax'

export const getCollegeList = () =>
  osc.get(`/college`)

export const createCollege = (item: any) =>
  osc.post(`/college`, item)

export const deleteCollege = (id: number) =>
  osc.delete(`/college`, { data: { id } })
