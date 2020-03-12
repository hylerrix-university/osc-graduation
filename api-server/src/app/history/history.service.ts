import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { HistoryEntity } from './history.entity'
import { CreateHistoryDto, UpdateHistoryDto, RemoveHistoryDto } from './history.dto'

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(HistoryEntity)
    private historyRepository: Repository<HistoryEntity>,
  ) { }

  async findAll(page: number = 1) {
    const historys = await this.historyRepository.find()
    return { success: true, data: historys }
  }

  async create(createHistoryDto: CreateHistoryDto) {
    const history = await this.historyRepository.save({
      ...createHistoryDto,
    })
    return { success: true }
  }

  // async update(updateHistoryDto: UpdateHistoryDto) {
  //   const history = await this.historyRepository.findOne({
  //     where: { code: updateHistoryDto.code },
  //   })
  //   const updatedHistory = await this.historyRepository.update(history, {
  //     ...updateHistoryDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeHistoryDto: RemoveHistoryDto) {
    const history = await this.historyRepository.findOne({
      where: { id: removeHistoryDto.id },
    })
    const deletedHistory = await this.historyRepository.remove(history)
    return { success: true }
  }
}
