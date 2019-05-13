import { LectorList } from '@/constant/lector'

export const getLectorList = () => Promise.resolve({
  success: true,
  data: LectorList,
})
