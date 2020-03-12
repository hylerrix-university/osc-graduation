import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { LogEntity } from './log.entity'
import { CreateLogDto, UpdateLogDto, RemoveLogDto } from './log.dto'

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(LogEntity)
    private logRepository: Repository<LogEntity>,
  ) { }

  async findAll(page: number = 1) {
    const logs = await this.logRepository.find()
    return { success: true, data: logs }
  }

  async create(createLogDto: CreateLogDto) {
    const log = await this.logRepository.save({
      ...createLogDto,
    })
    return { success: true }
  }

  async update(updateLogDto: UpdateLogDto) {
    const log = await this.logRepository.findOne({
      where: { id: updateLogDto.id },
    })
    const updatedLog = await this.logRepository.update(log, {
      ...updateLogDto,
    })
    return { success: true }
  }

  async remove(removeLogDto: RemoveLogDto) {
    const log = await this.logRepository.findOne({
      where: { id: removeLogDto.id },
    })
    const deletedLog = await this.logRepository.remove(log)
    return { success: true }
  }
}
