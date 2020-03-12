import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { RoleService } from './role.service'
import { CreateRoleDto, UpdateRoleDto, RemoveRoleDto, RelateAdminDto, RelateMenuDto } from './role.dto'
import { puts } from 'util';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  // 获取所有角色信息
  @Get()
  findAll(): object {
    return this.roleService.findAll()
  }

  // 新增一个角色信息
  @Post()
  async create(@Body() createRoleDto: CreateRoleDto): Promise<object> {
    return this.roleService.create(createRoleDto)
  }

  // 修改一个角色信息
  // @Put()
  // async update(@Body() updateRoleDto: UpdateRoleDto): Promise<object> {
  //   return this.roleService.update(updateRoleDto)
  // }

  // 删除一个角色信息
  @Delete()
  async remove(@Body() removeRoleDto: RemoveRoleDto): Promise<object> {
    return this.roleService.remove(removeRoleDto)
  }

  // 给一个角色分配多个人员
  @Put('/admin')
  async relateAdmin(@Body() relateAdminDto: RelateAdminDto): Promise<object> {
    return this.roleService.relateAdmin(relateAdminDto)
  }

  // 给一个角色分配多个导航
  @Put('/menu')
  async relateMenu(@Body() relateRoleDto: RelateMenuDto): Promise<object> {
    return this.roleService.relateMenu(relateRoleDto)
  }
}
