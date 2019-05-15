import { cms } from '@/commons/ajax'
// import { SponsorList } from '@/constant/sponsor'

export const getSponsorList = () =>
  cms.get(`sponsor`)

export const createSponsor = (role: any) =>
  cms.post(`sponsor`, role)

export const deleteSponsor = (id: number) =>
  cms.delete(`/sponsor`, { data: { id } })
