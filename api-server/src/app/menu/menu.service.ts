import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { MenuEntity } from './menu.entity'
import { CreateMenuDto, UpdateMenuDto, RemoveMenuDto } from './menu.dto'
import { AdminEntity } from '../admin/admin.entity';
import { RoleEntity } from '../role/role.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity)
    private menuRepository: Repository<MenuEntity>,
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>,
  ) { }

  async findAll(page: number = 1) {
    const menus = await this.menuRepository.find()
    return { success: true, data: menus }
  }

  async findByUser(userId: number) {
    const admin: any = await this.adminRepository.findOne({
      where: { id: userId },
      relations: ['role'],
    })
    const role = await this.roleRepository.findOne({
      where: { id: admin.role.id },
      relations: ['menus'],
    })
    return { success: true, data: role.menus }
  }

  async create(createMenuDto: CreateMenuDto) {
    const menu = await this.menuRepository.save({
      ...createMenuDto,
    })
    return { success: true }
  }

  // async update(updateMenuDto: UpdateMenuDto) {
  //   const menu = await this.menuRepository.findOne({
  //     where: { id: updateMenuDto.id },
  //   })
  //   const updatedMenu = await this.menuRepository.update(menu, {
  //     ...updateMenuDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeMenuDto: RemoveMenuDto) {
    const menu = await this.menuRepository.findOne({
      where: { id: removeMenuDto.id },
    })
    const deletedMenu = await this.menuRepository.remove(menu)
    return { success: true }
  }
}
