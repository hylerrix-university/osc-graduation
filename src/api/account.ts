import { osc } from '@/commons/ajax'
// import { AccountList } from '@/constant/account'

export const getAccountList = () =>
  osc.get(`/account`)

export const createAccount = (item: any) =>
  osc.post(`/account`, item)

export const deleteAccount = (id: number) =>
  osc.delete(`/account`, { data: { id } })
