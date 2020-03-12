import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CollegeEntity } from './college.entity'
import { CreateCollegeDto, UpdateCollegeDto, RemoveCollegeDto } from './college.dto'

@Injectable()
export class CollegeService {
  constructor(
    @InjectRepository(CollegeEntity)
    private collegeRepository: Repository<CollegeEntity>,
  ) { }

  async findAll(page: number = 1) {
    const colleges = await this.collegeRepository.find()
    return { success: true, data: colleges }
  }

  async create(createCollegeDto: CreateCollegeDto) {
    const college = await this.collegeRepository.save({
      ...createCollegeDto,
    })
    return { success: true }
  }

  // async update(updateCollegeDto: UpdateCollegeDto) {
  //   const college = await this.collegeRepository.findOne({
  //     where: { code: updateCollegeDto.code },
  //   })
  //   const updatedCollege = await this.collegeRepository.update(college, {
  //     ...updateCollegeDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeCollegeDto: RemoveCollegeDto) {
    const college = await this.collegeRepository.findOne({
      where: { id: removeCollegeDto.id },
    })
    const deletedCollege = await this.collegeRepository.remove(college)
    return { success: true }
  }
}
