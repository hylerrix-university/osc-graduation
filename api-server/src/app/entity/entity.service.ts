import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { EntityEntity } from './entity.entity'
import { CreateEntityDto, UpdateEntityDto, RemoveEntityDto } from './entity.dto'
import { AdminEntity } from '../admin/admin.entity'
import { UnitEntity } from '../unit/unit.entity'

@Injectable()
export class EntityService {
  constructor(
    @InjectRepository(EntityEntity)
    private entityRepository: Repository<EntityEntity>,
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
    @InjectRepository(UnitEntity)
    private unitRepository: Repository<UnitEntity>,
  ) { }

  async findAll(page: number = 1) {
    const entitys = await this.entityRepository.find({
      relations: ['admin', 'unit'],
    })
    return { success: true, data: entitys }
  }

  async create(createEntityDto: CreateEntityDto) {
    const entity = await this.entityRepository.save({ ...createEntityDto })
    // 分配人员
    const admin = await this.adminRepository.findOne({
      where: { id: createEntityDto.adminId },
      relations: ['entitys'],
    })
    admin.entitys.push(entity)
    await this.adminRepository.save(admin)
    // 分配单位
    const unit = await this.unitRepository.findOne({
      where: { id: createEntityDto.unitId },
      relations: ['entitys'],
    })
    unit.entitys.push(entity)
    await this.unitRepository.save(unit)
    return { success: true }
  }

  // async update(updateEntityDto: UpdateEntityDto) {
  //   const entity = await this.entityRepository.findOne({
  //     where: { id: updateEntityDto.id },
  //   })
  //   const updatedEntity = await this.entityRepository.update(entity, {
  //     ...updateEntityDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeEntityDto: RemoveEntityDto) {
    const entity = await this.entityRepository.findOne({
      where: { id: removeEntityDto.id },
    })
    const deletedEntity = await this.entityRepository.remove(entity)
    return { success: true }
  }
}
