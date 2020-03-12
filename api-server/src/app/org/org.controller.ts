import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { OrgService } from './org.service'
import { CreateOrgDto, UpdateOrgDto, RemoveOrgDto } from './org.dto'

@Controller('org')
export class OrgController {
  constructor(private orgService: OrgService) {}

  // 获取所有组织信息
  @Get()
  findAll(): object {
    return this.orgService.findAll()
  }

  // 新增一个组织信息
  @Post()
  async create(@Body() createOrgDto: CreateOrgDto): Promise<object> {
    return this.orgService.create(createOrgDto)
  }

  // 修改一个组织信息
  // @Put()
  // async update(@Body() updateOrgDto: UpdateOrgDto): Promise<object> {
  //   return this.orgService.update(updateOrgDto)
  // }

  // 删除一个组织信息
  @Delete()
  async remove(@Body() removeOrgDto: RemoveOrgDto): Promise<object> {
    return this.orgService.remove(removeOrgDto)
  }
}
