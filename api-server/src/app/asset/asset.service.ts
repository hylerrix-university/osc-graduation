import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { AssetEntity } from './asset.entity'
import { CreateAssetDto, UpdateAssetDto, RemoveAssetDto } from './asset.dto'

@Injectable()
export class AssetService {
  constructor(
    @InjectRepository(AssetEntity)
    private assetRepository: Repository<AssetEntity>,
  ) { }

  async findAll(page: number = 1) {
    const assets = await this.assetRepository.find()
    return { success: true, data: assets }
  }

  async create(createAssetDto: CreateAssetDto) {
    const asset = await this.assetRepository.save({
      ...createAssetDto,
    })
    return { success: true }
  }

  // async update(updateAssetDto: UpdateAssetDto) {
  //   const asset = await this.assetRepository.findOne({
  //     where: { id: updateAssetDto.id },
  //   })
  //   const updatedAsset = await this.assetRepository.update(asset, {
  //     ...updateAssetDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeAssetDto: RemoveAssetDto) {
    const asset = await this.assetRepository.findOne({
      where: { id: removeAssetDto.id },
    })
    const deletedAsset = await this.assetRepository.remove(asset)
    return { success: true }
  }
}
