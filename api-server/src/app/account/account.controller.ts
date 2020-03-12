import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { AccountService } from './account.service'
import { CreateAccountDto, UpdateAccountDto, RemoveAccountDto } from './account.dto'

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  // 获取所有账号信息
  @Get()
  findAll(): object {
    return this.accountService.findAll()
  }

  // 新增一个账号信息
  @Post()
  async create(@Body() createAccountDto: CreateAccountDto): Promise<object> {
    return this.accountService.create(createAccountDto)
  }

  // 修改一个账号信息
  // @Put()
  // async update(@Body() updateAccountDto: UpdateAccountDto): Promise<object> {
  //   return this.accountService.update(updateAccountDto)
  // }

  // 删除一个账号信息
  @Delete()
  async remove(@Body() removeAccountDto: RemoveAccountDto): Promise<object> {
    return this.accountService.remove(removeAccountDto)
  }
}
