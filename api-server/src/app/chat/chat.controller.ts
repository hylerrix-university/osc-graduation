import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { ChatService } from './chat.service'
import { CreateChatDto, UpdateChatDto, RemoveChatDto, ChatAdminDto } from './chat.dto'

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  // 获取所有群聊信息
  @Get()
  findAll(): object {
    return this.chatService.findAll()
  }

  // 新增一个群聊信息
  @Post()
  async create(@Body() createChatDto: CreateChatDto): Promise<object> {
    return this.chatService.create(createChatDto)
  }

  // 修改一个群聊信息
  // @Put()
  // async update(@Body() updateChatDto: UpdateChatDto): Promise<object> {
  //   return this.chatService.update(updateChatDto)
  // }

  // 删除一个群聊信息
  @Delete()
  async remove(@Body() removeChatDto: RemoveChatDto): Promise<object> {
    return this.chatService.remove(removeChatDto)
  }

  // 给一个群聊分配多个人员
  @Put('/admin')
  async relateAdmin(@Body() chatAdminDto: ChatAdminDto): Promise<object> {
    return this.chatService.relateAdmin(chatAdminDto)
  }
}
