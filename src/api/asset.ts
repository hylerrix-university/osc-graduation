import { cms } from '@/commons/ajax'
// import { AssetList } from '@/constant/asset'

export const getAssetList = () =>
  cms.get(`/asset`)

export const createAsset = (item: any) =>
  cms.post(`/asset`, item)

export const deleteAsset = (id: number) =>
  cms.delete(`/asset`, { data: { id } })
