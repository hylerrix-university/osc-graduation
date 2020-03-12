import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { ReportService } from './report.service'
import { CreateReportDto, UpdateReportDto, RemoveReportDto } from './report.dto'

@Controller('report')
export class ReportController {
  constructor(private reportService: ReportService) {}

  // 获取所有月报信息
  @Get()
  findAll(): object {
    return this.reportService.findAll()
  }

  // 新增一个月报信息
  @Post()
  async create(@Body() createReportDto: CreateReportDto): Promise<object> {
    return this.reportService.create(createReportDto)
  }

  // 修改一个月报信息
  // @Put()
  // async update(@Body() updateReportDto: UpdateReportDto): Promise<object> {
  //   return this.reportService.update(updateReportDto)
  // }

  // 删除一个月报信息
  @Delete()
  async remove(@Body() removeReportDto: RemoveReportDto): Promise<object> {
    return this.reportService.remove(removeReportDto)
  }
}
