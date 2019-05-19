import { osc } from '@/commons/ajax'
// import { AssetList } from '@/constant/asset'

export const getAssetList = () =>
  osc.get(`/asset`)

export const createAsset = (item: any) =>
  osc.post(`/asset`, item)

export const deleteAsset = (id: number) =>
  osc.delete(`/asset`, { data: { id } })
