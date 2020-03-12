import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { YardService } from './yard.service'
import { CreateYardDto, UpdateYardDto, RemoveYardDto } from './yard.dto'

@Controller('yard')
export class YardController {
  constructor(private yardService: YardService) {}

  // 获取所有场地信息
  @Get()
  findAll(): object {
    return this.yardService.findAll()
  }

  // 新增一个场地信息
  @Post()
  async create(@Body() createYardDto: CreateYardDto): Promise<object> {
    return this.yardService.create(createYardDto)
  }

  // 修改一个场地信息
  // @Put()
  // async update(@Body() updateYardDto: UpdateYardDto): Promise<object> {
  //   return this.yardService.update(updateYardDto)
  // }

  // 删除一个场地信息
  @Delete()
  async remove(@Body() removeYardDto: RemoveYardDto): Promise<object> {
    return this.yardService.remove(removeYardDto)
  }
}
