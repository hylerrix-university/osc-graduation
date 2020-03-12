import { Controller, Get, Post, Put, Delete } from '@nestjs/common'
import { Req, Res, Header, Query, Body, Param, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { LoginAdminDTO, CreateAdminDto, UpdateAdminDto, RemoveAdminDto } from './admin.dto'
import { AdminService } from './admin.service'

// @ApiUseTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  // ------------- 通用模块

  // 获取所有人员基本信息
  @Get()
  async showAll() {
    return await this.adminService.showAll()
  }

  // 获取某一成员基本信息
  @Get('/:id')
  async findOne(@Param('id') adminId: number): Promise<object> {
    return await this.adminService.findOne(adminId)
  }

  // 注册并初始化一个人员
  @Post()
  async create(@Body() createAdminDto: CreateAdminDto): Promise<object> {
    return this.adminService.create(createAdminDto)
  }

  // 更新一个人员基本信息
  @Put(':id')
  async update(@Param('id') adminId: number, @Body() updateAdminDto: UpdateAdminDto): Promise<object> {
    return this.adminService.update(adminId, updateAdminDto)
  }

  // 删除一个人员信息
  @Delete()
  async remove(@Body() removeAdminDto: RemoveAdminDto): Promise<object> {
    return this.adminService.remove(removeAdminDto)
  }

  // ------------- 登录模块

  // 登录
  @Post('login')
  // @UsePipes(new ValidationPipe())
  async login(@Body() body: LoginAdminDTO) {
    return await this.adminService.login(body)
  }

  // 获取用户登录令牌
  @Get('token')
  async createToken(@Body() body: any): Promise<any> {
    // return await this.authService.login(body)
  }

  // @Get('read')
  // @UseGuards(AuthGuard())
  // read() {
  //   // this route is restricted by AuthGuard
  //   // JWT strategy
  //   return [1]
  // }

  // @Get('/:username')
  // showOneUser(@Param('username') username: string) {
  //   return this.adminService.read(username)
  // }

  // @Get('whoami')
  // @UseGuards(AuthGuard())
  // showMe(@Body('username') username: string) {
  //   return this.adminService.read(username)
  // }

  // @Post('register')
  // @UsePipes(new ValidationPipe())
  // register(@Body() data: LoginAdminDTO) {
  //   return this.userService.register(data)
  // }

  // ------------- 分配模块
}
