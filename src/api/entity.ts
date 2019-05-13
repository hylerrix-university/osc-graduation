import { EntityList } from '@/constant/entity'

export const getEntityList = () => Promise.resolve({
  success: true,
  data: EntityList,
})
