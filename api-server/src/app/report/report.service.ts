import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ReportEntity } from './report.entity'
import { CreateReportDto, UpdateReportDto, RemoveReportDto } from './report.dto'

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(ReportEntity)
    private reportRepository: Repository<ReportEntity>,
  ) { }

  async findAll(page: number = 1) {
    const reports = await this.reportRepository.find()
    return { success: true, data: reports }
  }

  async create(createReportDto: CreateReportDto) {
    const report = await this.reportRepository.save({
      ...createReportDto,
    })
    return { success: true }
  }

  // async update(updateReportDto: UpdateReportDto) {
  //   const report = await this.reportRepository.findOne({
  //     where: { code: updateReportDto.code },
  //   })
  //   const updatedReport = await this.reportRepository.update(report, {
  //     ...updateReportDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeReportDto: RemoveReportDto) {
    const report = await this.reportRepository.findOne({
      where: { id: removeReportDto.id },
    })
    const deletedReport = await this.reportRepository.remove(report)
    return { success: true }
  }
}
