import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { ProjectService } from './project.service'
import { CreateProjectDto, UpdateProjectDto, RemoveProjectDto, ProjectAdminDto } from './project.dto'

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  // 获取所有项目信息
  @Get()
  findAll(): object {
    return this.projectService.findAll()
  }

  // 新增一个项目信息
  @Post()
  async create(@Body() createProjectDto: CreateProjectDto): Promise<object> {
    return this.projectService.create(createProjectDto)
  }

  // 修改一个项目信息
  // @Put()
  // async update(@Body() updateProjectDto: UpdateProjectDto): Promise<object> {
  //   return this.projectService.update(updateProjectDto)
  // }

  // 删除一个项目信息
  @Delete()
  async remove(@Body() removeProjectDto: RemoveProjectDto): Promise<object> {
    return this.projectService.remove(removeProjectDto)
  }

  // 给一个项目分配多个人员
  @Put('/admin')
  async relateAdmin(@Body() projectAdminDto: ProjectAdminDto): Promise<object> {
    return this.projectService.relateAdmin(projectAdminDto)
  }
}
