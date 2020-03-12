import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { LoginAdminDTO, CreateAdminDto, UpdateAdminDto, RemoveAdminDto } from './admin.dto'

import { AdminEntity } from './admin.entity'

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private readonly adminRepository: Repository<AdminEntity>,
  ) {}

  // ------------- 通用模块
  async showAll(page: number = 1) {
    const users = await this.adminRepository.find({
      // relations: ['ideas', 'bookmarks'],
      // take: 25,
      // skip: 25 * (page - 1),
    })
    // return users.map(user => user.toResponseObject(false))
    return { success: true, data: users }
  }

  async findOne(adminId: number) {
    const user = await this.adminRepository.findOne({ id: adminId })
    return { success: true, data: user }
  }

  async create(createAdminDto: CreateAdminDto) {
    const admin = await this.adminRepository.save({
      ...createAdminDto,
      password: '123456',
      status: 1,
    })
    return { success: true }
  }

  async update(adminId: number, updateAdminDto: UpdateAdminDto) {
    const admin = await this.adminRepository.findOne({ id: adminId })
    await this.adminRepository.update(admin, { ...updateAdminDto })
    return { success: true }
  }

  async remove(removeAdminDto: RemoveAdminDto) {
    const admin = await this.adminRepository.findOne({
      where: { id: removeAdminDto.id },
    })
    const deletedAdmin = await this.adminRepository.remove(admin)
    return { success: true }
  }

  // async read(username: string) {
  //   const user = await this.adminRepository.findOne({
  //     where: { username },
  //     relations: ['ideas', 'bookmarks'],
  //   })
  //   return user.toResponseObject(false)
  // }

  async login(body: LoginAdminDTO) {
    const { username, password } = body
    const admin = await this.adminRepository.findOne({ username, password })
    // if (!admin || !(await admin.comparePassword(password))) {
    if (!admin) {
      throw new HttpException(
        '账号或密码错误',
        HttpStatus.BAD_REQUEST,
      )
    }
    // // return admin.toResponseObject()
    return { success: true, data: admin }
  }

  // async register(data: AdminDTO) {
  //   const { username } = data
  //   let admin = await this.adminRepository.findOne({ where: { username } })
  //   if (admin) {
  //     throw new HttpException('该用户名已被注册', HttpStatus.BAD_REQUEST)
  //   }
  //   admin = await this.adminRepository.create(data)
  //   await this.adminRepository.save(admin)
  //   return admin.toResponseObject()
  // }
}
