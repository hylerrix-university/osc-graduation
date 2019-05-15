import { cms } from '@/commons/ajax'
// import { AccountList } from '@/constant/account'

export const getAccountList = () =>
  cms.get(`/account`)

export const createAccount = (item: any) =>
  cms.post(`/account`, item)

export const deleteAccount = (id: number) =>
  cms.delete(`/account`, { data: { id } })
