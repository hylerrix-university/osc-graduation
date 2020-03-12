import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { PlatformService } from './platform.service'
import { CreatePlatformDto, UpdatePlatformDto, RemovePlatformDto } from './platform.dto'

@Controller('platform')
export class PlatformController {
  constructor(private platformService: PlatformService) {}

  // 获取所有平台信息
  @Get()
  findAll(): object {
    return this.platformService.findAll()
  }

  // 新增一个平台信息
  @Post()
  async create(@Body() createPlatformDto: CreatePlatformDto): Promise<object> {
    return this.platformService.create(createPlatformDto)
  }

  // 修改一个平台信息
  // @Put()
  // async update(@Body() updatePlatformDto: UpdatePlatformDto): Promise<object> {
  //   return this.platformService.update(updatePlatformDto)
  // }

  // 删除一个平台信息
  @Delete()
  async remove(@Body() removePlatformDto: RemovePlatformDto): Promise<object> {
    return this.platformService.remove(removePlatformDto)
  }
}
