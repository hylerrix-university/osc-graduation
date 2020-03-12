import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { LogService } from './log.service'
import { CreateLogDto, UpdateLogDto, RemoveLogDto } from './log.dto'

@Controller('log')
export class LogController {
  constructor(private logService: LogService) {}

  // 获取所有日志信息
  @Get()
  findAll(): object {
    return this.logService.findAll()
  }

  // 新增一个日志信息
  @Post()
  async create(@Body() createLogDto: CreateLogDto): Promise<object> {
    return this.logService.create(createLogDto)
  }

  // 修改一个日志信息
  // @Put()
  // async update(@Body() updateLogDto: UpdateLogDto): Promise<object> {
  //   return this.logService.update(updateLogDto)
  // }

  // 删除一个日志信息
  @Delete()
  async remove(@Body() removeLogDto: RemoveLogDto): Promise<object> {
    return this.logService.remove(removeLogDto)
  }
}
