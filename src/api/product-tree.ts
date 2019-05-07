import { NavList } from '@/constant/nav'
import { NodeAuthList } from '@/constant/product-tree'

export const getProductTree = () => Promise.resolve({
  success: true,
  rows: NavList,
})

export const getNodeAuthList = () => Promise.resolve({
  success: true,
  rows: NodeAuthList,
})
