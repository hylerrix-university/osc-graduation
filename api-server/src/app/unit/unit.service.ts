import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { UnitEntity } from './unit.entity'
import { CreateUnitDto, UpdateUnitDto, RemoveUnitDto } from './unit.dto'

@Injectable()
export class UnitService {
  constructor(
    @InjectRepository(UnitEntity)
    private unitRepository: Repository<UnitEntity>,
  ) { }

  async findAll(page: number = 1) {
    const units = await this.unitRepository.find()
    return { success: true, data: units }
  }

  async create(createUnitDto: CreateUnitDto) {
    const unit = await this.unitRepository.save({
      ...createUnitDto,
    })
    return { success: true }
  }

  // async update(updateUnitDto: UpdateUnitDto) {
  //   const unit = await this.unitRepository.findOne({
  //     where: { code: updateUnitDto.code },
  //   })
  //   const updatedUnit = await this.unitRepository.update(unit, {
  //     ...updateUnitDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeUnitDto: RemoveUnitDto) {
    const unit = await this.unitRepository.findOne({
      where: { id: removeUnitDto.id },
    })
    const deletedUnit = await this.unitRepository.remove(unit)
    return { success: true }
  }
}
