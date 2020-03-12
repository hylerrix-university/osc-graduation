import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { TaskService } from './task.service'
import { CreateTaskDto, UpdateTaskDto, RemoveTaskDto } from './task.dto'

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  // 获取所有任务信息
  @Get()
  findAll(): object {
    return this.taskService.findAll()
  }

  // 新增一个任务信息
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<object> {
    return this.taskService.create(createTaskDto)
  }

  // 修改一个任务信息
  // @Put()
  // async update(@Body() updateTaskDto: UpdateTaskDto): Promise<object> {
  //   return this.taskService.update(updateTaskDto)
  // }

  // 删除一个任务信息
  @Delete()
  async remove(@Body() removeTaskDto: RemoveTaskDto): Promise<object> {
    return this.taskService.remove(removeTaskDto)
  }
}
