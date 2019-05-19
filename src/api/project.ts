import { osc } from '@/commons/ajax'
// import { ProjectList } from '@/constant/project'

export const getProjectList = () =>
  osc.get(`/project`)

export const createProject = (item: any) =>
  osc.post(`/project`, item)

export const deleteProject = (id: number) =>
  osc.delete(`/project`, { data: { id } })
