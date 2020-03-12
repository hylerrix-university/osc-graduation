import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { UnitService } from './unit.service'
import { CreateUnitDto, UpdateUnitDto, RemoveUnitDto } from './unit.dto'

@Controller('unit')
export class UnitController {
  constructor(private unitService: UnitService) {}

  // 获取所有单位信息
  @Get()
  findAll(): object {
    return this.unitService.findAll()
  }

  // 新增一个单位信息
  @Post()
  async create(@Body() createUnitDto: CreateUnitDto): Promise<object> {
    return this.unitService.create(createUnitDto)
  }

  // 修改一个单位信息
  // @Put()
  // async update(@Body() updateUnitDto: UpdateUnitDto): Promise<object> {
  //   return this.unitService.update(updateUnitDto)
  // }

  // 删除一个单位信息
  @Delete()
  async remove(@Body() removeUnitDto: RemoveUnitDto): Promise<object> {
    return this.unitService.remove(removeUnitDto)
  }
}
