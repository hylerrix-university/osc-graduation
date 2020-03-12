import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { SponsorService } from './sponsor.service'
import { CreateSponsorDto, UpdateSponsorDto, RemoveSponsorDto } from './sponsor.dto'

@Controller('sponsor')
export class SponsorController {
  constructor(private sponsorService: SponsorService) {}

  // 获取所有赞助信息
  @Get()
  findAll(): object {
    return this.sponsorService.findAll()
  }

  // 新增一个赞助信息
  @Post()
  async create(@Body() createSponsorDto: CreateSponsorDto): Promise<object> {
    return this.sponsorService.create(createSponsorDto)
  }

  // 修改一个赞助信息
  // @Put()
  // async update(@Body() updateSponsorDto: UpdateSponsorDto): Promise<object> {
  //   return this.sponsorService.update(updateSponsorDto)
  // }

  // 删除一个赞助信息
  @Delete()
  async remove(@Body() removeSponsorDto: RemoveSponsorDto): Promise<object> {
    return this.sponsorService.remove(removeSponsorDto)
  }
}
