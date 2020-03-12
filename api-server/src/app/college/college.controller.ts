import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { CollegeService } from './college.service'
import { CreateCollegeDto, UpdateCollegeDto, RemoveCollegeDto } from './college.dto'

@Controller('college')
export class CollegeController {
  constructor(private collegeService: CollegeService) {}

  // 获取所有大学信息
  @Get()
  findAll(): object {
    return this.collegeService.findAll()
  }

  // 新增一个大学信息
  @Post()
  async create(@Body() createCollegeDto: CreateCollegeDto): Promise<object> {
    return this.collegeService.create(createCollegeDto)
  }

  // 修改一个大学信息
  // @Put()
  // async update(@Body() updateCollegeDto: UpdateCollegeDto): Promise<object> {
  //   return this.collegeService.update(updateCollegeDto)
  // }

  // 删除一个大学信息
  @Delete()
  async remove(@Body() removeCollegeDto: RemoveCollegeDto): Promise<object> {
    return this.collegeService.remove(removeCollegeDto)
  }
}
