import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { SponsorEntity } from './sponsor.entity'
import { CreateSponsorDto, UpdateSponsorDto, RemoveSponsorDto } from './sponsor.dto'

@Injectable()
export class SponsorService {
  constructor(
    @InjectRepository(SponsorEntity)
    private sponsorRepository: Repository<SponsorEntity>,
  ) { }

  async findAll(page: number = 1) {
    const sponsors = await this.sponsorRepository.find()
    return { success: true, data: sponsors }
  }

  async create(createSponsorDto: CreateSponsorDto) {
    const sponsor = await this.sponsorRepository.save({
      ...createSponsorDto,
    })
    return { success: true }
  }

  // async update(updateSponsorDto: UpdateSponsorDto) {
  //   const sponsor = await this.sponsorRepository.findOne({
  //     where: { id: updateSponsorDto.id },
  //   })
  //   const updatedSponsor = await this.sponsorRepository.update(sponsor, {
  //     ...updateSponsorDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeSponsorDto: RemoveSponsorDto) {
    const sponsor = await this.sponsorRepository.findOne({
      where: { id: removeSponsorDto.id },
    })
    const deletedSponsor = await this.sponsorRepository.remove(sponsor)
    return { success: true }
  }
}
