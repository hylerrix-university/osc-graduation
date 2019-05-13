import { AccountList } from '@/constant/account'

export const getAccountList = () => Promise.resolve({
  success: true,
  data: AccountList,
})
