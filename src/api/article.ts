import { osc } from '@/commons/ajax'

export const getArticleList = () =>
  osc.get(`/article`)

export const createArticle = (item: any) =>
  osc.post(`/article`, item)

export const deleteArticle = (id: number) =>
  osc.delete(`/article`, { data: { id } })
