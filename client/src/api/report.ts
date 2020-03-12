import { osc } from '@/commons/ajax'

export const getReportList = () =>
  osc.get(`/report`)

export const createReport = (item: any) =>
  osc.post(`/report`, item)

export const deleteReport = (id: number) =>
  osc.delete(`/report`, { data: { id } })
