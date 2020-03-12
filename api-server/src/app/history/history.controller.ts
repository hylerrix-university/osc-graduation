import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { HistoryService } from './history.service'
import { CreateHistoryDto, UpdateHistoryDto, RemoveHistoryDto } from './history.dto'

@Controller('history')
export class HistoryController {
  constructor(private historyService: HistoryService) {}

  // 获取所有历史信息
  @Get()
  findAll(): object {
    return this.historyService.findAll()
  }

  // 新增一个历史信息
  @Post()
  async create(@Body() createHistoryDto: CreateHistoryDto): Promise<object> {
    return this.historyService.create(createHistoryDto)
  }

  // 修改一个历史信息
  // @Put()
  // async update(@Body() updateHistoryDto: UpdateHistoryDto): Promise<object> {
  //   return this.historyService.update(updateHistoryDto)
  // }

  // 删除一个历史信息
  @Delete()
  async remove(@Body() removeHistoryDto: RemoveHistoryDto): Promise<object> {
    return this.historyService.remove(removeHistoryDto)
  }
}
