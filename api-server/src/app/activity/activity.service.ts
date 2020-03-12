import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ActivityEntity } from './activity.entity'
import { CreateActivityDto, UpdateActivityDto, RemoveActivityDto } from './activity.dto'

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(ActivityEntity)
    private activityRepository: Repository<ActivityEntity>,
  ) { }

  async findAll(page: number = 1) {
    const activitys = await this.activityRepository.find()
    return { success: true, data: activitys }
  }

  async create(createActivityDto: CreateActivityDto) {
    const activity = await this.activityRepository.save({
      ...createActivityDto,
    })
    return { success: true }
  }

  // async update(updateActivityDto: UpdateActivityDto) {
  //   const activity = await this.activityRepository.findOne({
  //     where: { id: updateActivityDto.id },
  //   })
  //   const updatedActivity = await this.activityRepository.update(activity, {
  //     ...updateActivityDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeActivityDto: RemoveActivityDto) {
    const activity = await this.activityRepository.findOne({
      where: { id: removeActivityDto.id },
    })
    const deletedActivity = await this.activityRepository.remove(activity)
    return { success: true }
  }
}
