import { SponsorList } from '@/constant/sponsor'

export const getSponsorList = () => Promise.resolve({
  success: true,
  data: SponsorList,
})
