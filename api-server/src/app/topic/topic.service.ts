import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { TopicEntity } from './topic.entity'
import { CreateTopicDto, UpdateTopicDto, RemoveTopicDto, RelateUserDto } from './topic.dto';
// import { ActivityEntity } from '../activity/activity.entity'
import { UserEntity } from '../user/user.entity'

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(TopicEntity)
    private topicRepository: Repository<TopicEntity>,
    // @InjectRepository(TopicEntity)
    // private activityRepository: Repository<ActivityEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) { }

  async findAll(page: number = 1) {
    const topics = await this.topicRepository.find({
      relations: ['activity', 'user'],
    })
    return { success: true, data: topics }
  }

  async create(createTopicDto: CreateTopicDto) {
    const topic = await this.topicRepository.save({
      ...createTopicDto,
    })
    return { success: true }
  }

  // async update(updateTopicDto: UpdateTopicDto) {
  //   const topic = await this.topicRepository.findOne({
  //     where: { code: updateTopicDto.code },
  //   })
  //   const updatedTopic = await this.topicRepository.update(topic, {
  //     ...updateTopicDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeTopicDto: RemoveTopicDto) {
    const topic = await this.topicRepository.findOne({
      where: { id: removeTopicDto.id },
    })
    const deletedTopic = await this.topicRepository.remove(topic)
    return { success: true }
  }

  async relateLector(relateUserDto: RelateUserDto) {
    const topic = await this.topicRepository.findOne({
      where: { id: relateUserDto.topicId },
      relations: ['user'],
    })
    // 给讲师分配主题
    const user = await this.userRepository.findOne({
      where: {id: relateUserDto.userId },
      relations: ['topics'],
    })
    user.topics.push(topic)
    await this.userRepository.save(user)
    return { success: true }
  }
}
