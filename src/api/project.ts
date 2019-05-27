import { osc } from '@/commons/ajax'
// import { ProjectList } from '@/constant/project'

export const getProjectList = () =>
  osc.get(`/project`)

export const createProject = (item: any) =>
  osc.post(`/project`, item)

export const deleteProject = (id: number) =>
  osc.delete(`/project`, { data: { id } })

export const relateAdmin = (projectId: number, adminIds: number[]) =>
  osc.put(`/project/admin`, {
    projectId,
    adminIds,
  })
