import { osc } from '@/commons/ajax'
// import { EntityList } from '@/constant/entity'

export const getFileList = () =>
  osc.get(`/file`)
