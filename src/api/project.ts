import { cms } from '@/commons/ajax'
// import { ProjectList } from '@/constant/project'

export const getProjectList = () =>
  cms.get(`/project`)

export const createProject = (item: any) =>
  cms.post(`/project`, item)

export const deleteProject = (id: number) =>
  cms.delete(`/project`, { data: { id } })
