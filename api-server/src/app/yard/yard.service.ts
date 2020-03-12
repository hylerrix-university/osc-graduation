import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { YardEntity } from './yard.entity'
import { CreateYardDto, UpdateYardDto, RemoveYardDto } from './yard.dto'

@Injectable()
export class YardService {
  constructor(
    @InjectRepository(YardEntity)
    private yardRepository: Repository<YardEntity>,
  ) { }

  async findAll(page: number = 1) {
    const yards = await this.yardRepository.find()
    return { success: true, data: yards }
  }

  async create(createYardDto: CreateYardDto) {
    const yard = await this.yardRepository.save({
      ...createYardDto,
    })
    return { success: true }
  }

  // async update(updateYardDto: UpdateYardDto) {
  //   const yard = await this.yardRepository.findOne({
  //     where: { id: updateYardDto.id },
  //   })
  //   const updatedYard = await this.yardRepository.update(yard, {
  //     ...updateYardDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeYardDto: RemoveYardDto) {
    const yard = await this.yardRepository.findOne({
      where: { id: removeYardDto.id },
    })
    const deletedYard = await this.yardRepository.remove(yard)
    return { success: true }
  }
}
