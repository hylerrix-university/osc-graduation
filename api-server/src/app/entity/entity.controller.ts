import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { EntityService } from './entity.service'
import { CreateEntityDto, UpdateEntityDto, RemoveEntityDto } from './entity.dto'

@Controller('entity')
export class EntityController {
  constructor(private entityService: EntityService) {}

  // 获取所有物资信息，包括其一个负责人、一个平台
  @Get()
  findAll(): object {
    return this.entityService.findAll()
  }

  // 新增一个物资信息
  @Post()
  async create(@Body() createEntityDto: CreateEntityDto): Promise<object> {
    return this.entityService.create(createEntityDto)
  }

  // 修改一个物资信息
  // @Put()
  // async update(@Body() updateEntityDto: UpdateEntityDto): Promise<object> {
  //   return this.entityService.update(updateEntityDto)
  // }

  // 删除一个物资信息
  @Delete()
  async remove(@Body() removeEntityDto: RemoveEntityDto): Promise<object> {
    return this.entityService.remove(removeEntityDto)
  }
}
