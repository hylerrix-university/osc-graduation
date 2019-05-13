import { ChatList } from '@/constant/chat'

export const getChatList = () => Promise.resolve({
  success: true,
  data: ChatList,
})
