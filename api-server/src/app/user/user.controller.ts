import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { UserService } from './user.service'
import { CreateUserDto, UpdateUserDto, RemoveUserDto } from './user.dto'

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // 获取所有用户信息
  @Get()
  findAll(): object {
    return this.userService.findAll()
  }

  // 新增一个用户信息
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<object> {
    return this.userService.create(createUserDto)
  }

  // 修改一个用户信息
  @Put()
  async update(@Body() updateUserDto: UpdateUserDto): Promise<object> {
    return this.userService.update(updateUserDto)
  }

  // 删除一个用户信息
  @Delete()
  async remove(@Body() removeUserDto: RemoveUserDto): Promise<object> {
    return this.userService.remove(removeUserDto)
  }
}
