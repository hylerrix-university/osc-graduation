import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { FileService } from './file.service'
import { CreateFileDto, UpdateFileDto, RemoveFileDto } from './file.dto'

@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  // 获取所有大学信息
  @Get()
  findAll(): object {
    return this.fileService.findAll()
  }

  // 新增一个大学信息
  @Post()
  async create(@Body() createFileDto: CreateFileDto): Promise<object> {
    return this.fileService.create(createFileDto)
  }

  // 修改一个大学信息
  // @Put()
  // async update(@Body() updateFileDto: UpdateFileDto): Promise<object> {
  //   return this.fileService.update(updateFileDto)
  // }

  // 删除一个大学信息
  @Delete()
  async remove(@Body() removeFileDto: RemoveFileDto): Promise<object> {
    return this.fileService.remove(removeFileDto)
  }
}
