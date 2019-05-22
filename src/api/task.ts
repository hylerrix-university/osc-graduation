import { osc } from '@/commons/ajax'

export const getTaskList = () =>
  osc.get(`/task`)

export const createTask = (item: any) =>
  osc.post(`/task`, item)

export const deleteTask = (id: number) =>
  osc.delete(`/task`, { data: { id } })
