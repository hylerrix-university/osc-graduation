import { YardList } from '@/constant/yard'

export const getYardList = () => Promise.resolve({
  success: true,
  data: YardList,
})
