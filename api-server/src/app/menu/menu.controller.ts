import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { MenuService } from './menu.service'
import { CreateMenuDto, UpdateMenuDto, RemoveMenuDto } from './menu.dto'

@Controller('menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

  // 获取所有菜单信息
  @Get()
  findAll(): object {
    return this.menuService.findAll()
  }

  // 获取某一用户菜单信息
  @Get(':id')
  findByUser(@Param('id') userId: number): object {
    return this.menuService.findByUser(userId)
  }

  // 新增一个菜单信息
  @Post()
  async create(@Body() createMenuDto: CreateMenuDto): Promise<object> {
    return this.menuService.create(createMenuDto)
  }

  // 修改一个菜单信息
  // @Put()
  // async update(@Body() updateMenuDto: UpdateMenuDto): Promise<object> {
  //   return this.menuService.update(updateMenuDto)
  // }

  // 删除一个菜单信息
  @Delete()
  async remove(@Body() removeMenuDto: RemoveMenuDto): Promise<object> {
    return this.menuService.remove(removeMenuDto)
  }
}
