import { RoleList } from '@/constant/role'

export const getAllRole = () => Promise.resolve({
  success: true,
  data: RoleList,
})
