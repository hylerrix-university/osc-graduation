import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { UserEntity } from './user.entity'
import { CreateUserDto, UpdateUserDto, RemoveUserDto } from './user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) { }

  async findAll(page: number = 1) {
    const users = await this.userRepository.find({
      relations: ['topics'],
    })
    return { success: true, data: users }
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.save({
      ...createUserDto,
    })
    return { success: true }
  }

  async update(updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ id: updateUserDto.id })
    await this.userRepository.update(user, { ...updateUserDto })
    return { success: true }
  }

  async remove(removeUserDto: RemoveUserDto) {
    const user = await this.userRepository.findOne({
      where: { id: removeUserDto.id },
    })
    const deletedUser = await this.userRepository.remove(user)
    return { success: true }
  }
}
