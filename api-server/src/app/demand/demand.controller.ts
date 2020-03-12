import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { DemandService } from './demand.service'
import { CreateDemandDto, UpdateDemandDto, RemoveDemandDto } from './demand.dto'

@Controller('demand')
export class DemandController {
  constructor(private demandService: DemandService) {}

  // 获取所有需求信息
  @Get()
  findAll(): object {
    return this.demandService.findAll()
  }

  // 新增一个需求信息
  @Post()
  async create(@Body() createDemandDto: CreateDemandDto): Promise<object> {
    return this.demandService.create(createDemandDto)
  }

  // 修改一个需求信息
  // @Put()
  // async update(@Body() updateDemandDto: UpdateDemandDto): Promise<object> {
  //   return this.demandService.update(updateDemandDto)
  // }

  // 删除一个需求信息
  @Delete()
  async remove(@Body() removeDemandDto: RemoveDemandDto): Promise<object> {
    return this.demandService.remove(removeDemandDto)
  }
}
