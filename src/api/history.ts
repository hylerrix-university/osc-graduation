import { osc } from '@/commons/ajax'

export const getHistoryList = () =>
  osc.get(`/history`)

export const createHistory = (item: any) =>
  osc.post(`/history`, item)

export const deleteHistory = (id: number) =>
  osc.delete(`/history`, { data: { id } })
