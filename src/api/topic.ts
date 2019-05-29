import { osc } from '@/commons/ajax'

export const getTopicList = () =>
  osc.get(`/topic`)

export const createTopic = (item: any) =>
  osc.post(`/topic`, item)

export const deleteTopic = (id: number) =>
  osc.delete(`/topic`, { data: { id } })

export const relateLector = (topicId: number, lectorId: number) =>
  osc.put(`/topic/lector`, {
    topicId,
    userId: lectorId,
  })
