import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { RoleEntity } from './role.entity'
import { AdminEntity } from '../admin/admin.entity'
import { MenuEntity } from '../menu/menu.entity'
import { CreateRoleDto, UpdateRoleDto, RemoveRoleDto, RelateAdminDto, RelateMenuDto } from './role.dto'

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>,
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
    @InjectRepository(MenuEntity)
    private menuRepository: Repository<MenuEntity>,
  ) { }

  async findAll(page: number = 1) {
    const roles = await this.roleRepository.find({
      relations: ['admins', 'menus'],
    })
    return { success: true, data: roles }
  }

  async create(createRoleDto: CreateRoleDto) {
    const role = await this.roleRepository.save({
      ...createRoleDto,
    })
    return { success: true }
  }

  // async update(updateRoleDto: UpdateRoleDto) {
  //   const role = await this.roleRepository.findOne({
  //     where: { id: updateRoleDto.id },
  //   })
  //   const updatedRole = await this.roleRepository.update(role, {
  //     ...updateRoleDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeRoleDto: RemoveRoleDto) {
    const roleItem = await this.roleRepository.findOne({
      where: { id: removeRoleDto.id },
      relations: ['admins', 'menus'],
    })
    await this.roleRepository.remove(roleItem)
    return { success: true }
  }

  async relateAdmin(relateAdminDto: RelateAdminDto) {
    const id = relateAdminDto.roleId
    const roleItem = await this.roleRepository.findOne({
      where: { id },
      relations: ['admins'],
    })
    // 清空之前的分配
    roleItem.admins = []
    await this.roleRepository.save(roleItem)
    // 过滤可能重复的用户
    const uniqueAdminIds = new Set(relateAdminDto.adminIds)
    // 逐个分配每个用户
    for (const adminId of uniqueAdminIds) {
      const adminItem = await this.adminRepository.findOne({
        where: { id: adminId },
        relations: ['role'],
      })
      roleItem.admins.push(adminItem)
      await this.roleRepository.save(roleItem)
    }
    return { success: true, data: roleItem }
  }

  async relateMenu(relateMenuDto: RelateMenuDto) {
    const id = relateMenuDto.roleId
    const roleItem = await this.roleRepository.findOne({
      where: { id },
      relations: ['menus'],
    })
    // 清空之前的分配
    roleItem.menus = []
    await this.roleRepository.save(roleItem)
    // 过滤可能重复的导航
    const uniqueMenusIds = new Set(relateMenuDto.menuIds)
    // 逐个分配每个导航
    for (const menuId of uniqueMenusIds) {
      const menuItem = await this.menuRepository.findOne({
        where: { id: menuId },
        relations: ['roles'],
      })
      roleItem.menus.push(menuItem)
      await this.roleRepository.save(roleItem)
    }
    return { success: true, data: roleItem }
  }
}
