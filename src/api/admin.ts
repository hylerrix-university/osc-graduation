import { AdminList } from '@/constant/admin'

export const getAllAdmin = () => Promise.resolve({
  success: true,
  data: [...AdminList],
})
