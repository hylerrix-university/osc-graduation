import { PlatformList } from '@/constant/platform'

export const getPlatformList = () => Promise.resolve({
  success: true,
  data: PlatformList,
})
