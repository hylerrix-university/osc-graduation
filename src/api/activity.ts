import { ActivityList } from '@/constant/activity'

export const getActivityList = () => Promise.resolve({
  success: true,
  data: ActivityList,
})
