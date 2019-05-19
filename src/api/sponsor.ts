import { osc } from '@/commons/ajax'
// import { SponsorList } from '@/constant/sponsor'

export const getSponsorList = () =>
  osc.get(`sponsor`)

export const createSponsor = (role: any) =>
  osc.post(`sponsor`, role)

export const deleteSponsor = (id: number) =>
  osc.delete(`/sponsor`, { data: { id } })
