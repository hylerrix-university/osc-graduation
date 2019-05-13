import { ProjectList } from '@/constant/project'

export const getProjectList = () => Promise.resolve({
  success: true,
  data: ProjectList,
})
