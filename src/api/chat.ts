import { cms } from '@/commons/ajax'
// import { ChatList } from '@/constant/chat'

export const getChatList = () =>
  cms.get(`/chat`)

export const createChat = (item: any) =>
  cms.post(`/chat`, item)

export const deleteChat = (id: number) =>
  cms.delete(`/chat`, { data: { id } })
