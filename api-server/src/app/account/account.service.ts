import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { AccountEntity } from './account.entity'
import { CreateAccountDto, UpdateAccountDto, RemoveAccountDto } from './account.dto'
import { PlatformEntity } from '../platform/platform.entity'

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountEntity)
    private accountRepository: Repository<AccountEntity>,
    @InjectRepository(PlatformEntity)
    private platfromRepository: Repository<PlatformEntity>,
  ) { }

  async findAll(page: number = 1) {
    const accounts = await this.accountRepository.find({
      relations: ['platform'],
    })
    return { success: true, data: accounts }
  }

  async create(createAccountDto: CreateAccountDto) {
    const account = await this.accountRepository.save({ ...createAccountDto })
    // 分配平台
    const platform = await this.platfromRepository.findOne({
      where: {id: createAccountDto.platformId },
      relations: ['accounts'],
    })
    platform.accounts.push(account)
    await this.platfromRepository.save(platform)
    return { success: true }
  }

  // async update(updateAccountDto: UpdateAccountDto) {
  //   const account = await this.accountRepository.findOne({
  //     where: { id: updateAccountDto.id },
  //   })
  //   const updatedAccount = await this.accountRepository.update(account, {
  //     ...updateAccountDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeAccountDto: RemoveAccountDto) {
    const account = await this.accountRepository.findOne({
      where: { id: removeAccountDto.id },
    })
    const deletedAccount = await this.accountRepository.remove(account)
    return { success: true }
  }
}
