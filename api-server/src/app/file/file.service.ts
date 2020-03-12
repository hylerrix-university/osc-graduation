import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { FileEntity } from './file.entity'
import { CreateFileDto, UpdateFileDto, RemoveFileDto } from './file.dto'

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private fileRepository: Repository<FileEntity>,
  ) { }

  async findAll(page: number = 1) {
    const files = await this.fileRepository.find()
    return { success: true, data: files }
  }

  async create(createFileDto: CreateFileDto) {
    const file = await this.fileRepository.save({
      ...createFileDto,
    })
    return { success: true }
  }

  // async update(updateFileDto: UpdateFileDto) {
  //   const file = await this.fileRepository.findOne({
  //     where: { code: updateFileDto.code },
  //   })
  //   const updatedFile = await this.fileRepository.update(file, {
  //     ...updateFileDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeFileDto: RemoveFileDto) {
    const file = await this.fileRepository.findOne({
      where: { id: removeFileDto.id },
    })
    const deletedFile = await this.fileRepository.remove(file)
    return { success: true }
  }
}
