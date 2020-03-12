import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ChatEntity } from './chat.entity'
import { CreateChatDto, UpdateChatDto, RemoveChatDto, ChatAdminDto } from './chat.dto'

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatEntity)
    private chatRepository: Repository<ChatEntity>,
  ) { }

  async findAll(page: number = 1) {
    const chats = await this.chatRepository.find({
      relations: ['admins'],
    })
    return { success: true, data: chats }
  }

  async create(createChatDto: CreateChatDto) {
    const chat = await this.chatRepository.save({
      ...createChatDto,
    })
    return { success: true }
  }

  // async update(updateChatDto: UpdateChatDto) {
  //   const chat = await this.chatRepository.findOne({
  //     where: { id: updateChatDto.id },
  //   })
  //   const updatedChat = await this.chatRepository.update(chat, {
  //     ...updateChatDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeChatDto: RemoveChatDto) {
    const chat = await this.chatRepository.findOne({
      where: { id: removeChatDto.id },
    })
    const deletedChat = await this.chatRepository.remove(chat)
    return { success: true }
  }

  async relateAdmin(projectAdminDto: ChatAdminDto) {
    const id = projectAdminDto.chatId
    const projectItem = await this.chatRepository.findOne({
      where: { id },
      relations: ['admins'],
    })
    // 清空之前的分配
    projectItem.admins = []
    await this.chatRepository.save(projectItem)
    // 过滤可能重复的用户
    const uniqueAdminIds = new Set(projectAdminDto.adminIds)
    // 逐个分配每个用户
    for (const adminId of uniqueAdminIds) {
      // 重构：如果不加 any 报错，应该是 AdminRO 但也有问题？
      const adminItem: any = await this.chatRepository.findOne({
        where: { id: adminId },
      })
      projectItem.admins.push(adminItem)
      await this.chatRepository.save(projectItem)
    }
    return { success: true, data: projectItem }
  }
}
