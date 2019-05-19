import { osc } from '@/commons/ajax'
// import { ChatList } from '@/constant/chat'

export const getChatList = () =>
  osc.get(`/chat`)

export const createChat = (item: any) =>
  osc.post(`/chat`, item)

export const deleteChat = (id: number) =>
  osc.delete(`/chat`, { data: { id } })
