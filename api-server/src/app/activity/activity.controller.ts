import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { ActivityService } from './activity.service'
import { CreateActivityDto, UpdateActivityDto, RemoveActivityDto } from './activity.dto'

@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  // 获取所有活动信息
  @Get()
  findAll(): object {
    return this.activityService.findAll()
  }

  // 新增一个活动信息
  @Post()
  async create(@Body() createActivityDto: CreateActivityDto): Promise<object> {
    return this.activityService.create(createActivityDto)
  }

  // 修改一个活动信息
  // @Put()
  // async update(@Body() updateActivityDto: UpdateActivityDto): Promise<object> {
  //   return this.activityService.update(updateActivityDto)
  // }

  // 删除一个活动信息
  @Delete()
  async remove(@Body() removeActivityDto: RemoveActivityDto): Promise<object> {
    return this.activityService.remove(removeActivityDto)
  }
}
