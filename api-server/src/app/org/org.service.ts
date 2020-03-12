import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { OrgEntity } from './org.entity'
import { CreateOrgDto, UpdateOrgDto, RemoveOrgDto } from './org.dto'

@Injectable()
export class OrgService {
  constructor(
    @InjectRepository(OrgEntity)
    private orgRepository: Repository<OrgEntity>,
  ) { }

  async findAll(page: number = 1) {
    const orgs = await this.orgRepository.find()
    return { success: true, data: orgs }
  }

  async create(createOrgDto: CreateOrgDto) {
    const org = await this.orgRepository.save({
      ...createOrgDto,
    })
    return { success: true }
  }

  // async update(updateOrgDto: UpdateOrgDto) {
  //   const org = await this.orgRepository.findOne({
  //     where: { code: updateOrgDto.code },
  //   })
  //   const updatedOrg = await this.orgRepository.update(org, {
  //     ...updateOrgDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeOrgDto: RemoveOrgDto) {
    const org = await this.orgRepository.findOne({
      where: { id: removeOrgDto.id },
    })
    const deletedOrg = await this.orgRepository.remove(org)
    return { success: true }
  }
}
