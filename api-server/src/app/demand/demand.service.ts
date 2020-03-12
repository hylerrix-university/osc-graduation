import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { DemandEntity } from './demand.entity'
import { CreateDemandDto, UpdateDemandDto, RemoveDemandDto } from './demand.dto'

@Injectable()
export class DemandService {
  constructor(
    @InjectRepository(DemandEntity)
    private demandRepository: Repository<DemandEntity>,
  ) { }

  async findAll(page: number = 1) {
    const demands = await this.demandRepository.find()
    return { success: true, data: demands }
  }

  async create(createDemandDto: CreateDemandDto) {
    const demand = await this.demandRepository.save({
      ...createDemandDto,
    })
    return { success: true }
  }

  // async update(updateDemandDto: UpdateDemandDto) {
  //   const demand = await this.demandRepository.findOne({
  //     where: { code: updateDemandDto.code },
  //   })
  //   const updatedDemand = await this.demandRepository.update(demand, {
  //     ...updateDemandDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeDemandDto: RemoveDemandDto) {
    const demand = await this.demandRepository.findOne({
      where: { id: removeDemandDto.id },
    })
    const deletedDemand = await this.demandRepository.remove(demand)
    return { success: true }
  }
}
