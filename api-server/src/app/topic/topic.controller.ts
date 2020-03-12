import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { TopicService } from './topic.service'
import { CreateTopicDto, UpdateTopicDto, RemoveTopicDto, RelateUserDto } from './topic.dto'

@Controller('topic')
export class TopicController {
  constructor(private topicService: TopicService) {}

  // 获取所有主题信息
  @Get()
  findAll(): object {
    return this.topicService.findAll()
  }

  // 新增一个主题信息
  @Post()
  async create(@Body() createTopicDto: CreateTopicDto): Promise<object> {
    return this.topicService.create(createTopicDto)
  }

  // 修改一个主题信息
  // @Put()
  // async update(@Body() updateTopicDto: UpdateTopicDto): Promise<object> {
  //   return this.topicService.update(updateTopicDto)
  // }

  // 删除一个主题信息
  @Delete()
  async remove(@Body() removeTopicDto: RemoveTopicDto): Promise<object> {
    return this.topicService.remove(removeTopicDto)
  }

  // 给一个主题分配一个讲师
  @Put('lector')
  async relateLector(@Body() relateUserDto: RelateUserDto): Promise<object> {
    return this.topicService.relateLector(relateUserDto)
  }
}
