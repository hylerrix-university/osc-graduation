import { NavList } from '@/constant/nav'

export const getProductTree = () => Promise.resolve({
  success: true,
  rows: NavList,
})
