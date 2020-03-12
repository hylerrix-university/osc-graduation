import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { TaskEntity } from './task.entity'
import { CreateTaskDto, UpdateTaskDto, RemoveTaskDto } from './task.dto'

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) { }

  async findAll(page: number = 1) {
    const tasks = await this.taskRepository.find()
    return { success: true, data: tasks }
  }

  async create(createTaskDto: CreateTaskDto) {
    const task = await this.taskRepository.save({
      ...createTaskDto,
    })
    return { success: true }
  }

  // async update(updateTaskDto: UpdateTaskDto) {
  //   const task = await this.taskRepository.findOne({
  //     where: { code: updateTaskDto.code },
  //   })
  //   const updatedTask = await this.taskRepository.update(task, {
  //     ...updateTaskDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeTaskDto: RemoveTaskDto) {
    const task = await this.taskRepository.findOne({
      where: { id: removeTaskDto.id },
    })
    const deletedTask = await this.taskRepository.remove(task)
    return { success: true }
  }
}
