import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { AssetService } from './asset.service'
import { CreateAssetDto, UpdateAssetDto, RemoveAssetDto } from './asset.dto'

@Controller('asset')
export class AssetController {
  constructor(private assetService: AssetService) {}

  // 获取所有资产信息
  @Get()
  findAll(): object {
    return this.assetService.findAll()
  }

  // 新增一个资产信息
  @Post()
  async create(@Body() createAssetDto: CreateAssetDto): Promise<object> {
    return this.assetService.create(createAssetDto)
  }

  // 修改一个资产信息
  // @Put()
  // async update(@Body() updateAssetDto: UpdateAssetDto): Promise<object> {
  //   return this.assetService.update(updateAssetDto)
  // }

  // 删除一个资产信息
  @Delete()
  async remove(@Body() removeAssetDto: RemoveAssetDto): Promise<object> {
    return this.assetService.remove(removeAssetDto)
  }
}
