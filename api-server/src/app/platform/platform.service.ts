import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { PlatformEntity } from './platform.entity'
import { CreatePlatformDto, UpdatePlatformDto, RemovePlatformDto } from './platform.dto'

@Injectable()
export class PlatformService {
  constructor(
    @InjectRepository(PlatformEntity)
    private platformRepository: Repository<PlatformEntity>,
  ) { }

  async findAll(page: number = 1) {
    const platforms = await this.platformRepository.find()
    return { success: true, data: platforms }
  }

  async create(createPlatformDto: CreatePlatformDto) {
    const platform = await this.platformRepository.save({
      ...createPlatformDto,
    })
    return { success: true }
  }

  // async update(updatePlatformDto: UpdatePlatformDto) {
  //   const platform = await this.platformRepository.findOne({
  //     where: { id: updatePlatformDto.id },
  //   })
  //   const updatedPlatform = await this.platformRepository.update(platform, {
  //     ...updatePlatformDto,
  //   })
  //   return { success: true }
  // }

  async remove(removePlatformDto: RemovePlatformDto) {
    const platform = await this.platformRepository.findOne({
      where: { id: removePlatformDto.id },
    })
    const deletedPlatform = await this.platformRepository.remove(platform)
    return { success: true }
  }
}
