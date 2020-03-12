import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ProjectEntity } from './project.entity'
import { CreateProjectDto, UpdateProjectDto, RemoveProjectDto, ProjectAdminDto } from './project.dto';
import { AdminEntity } from '../admin/admin.entity'

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
  ) { }

  async findAll(page: number = 1) {
    const projects = await this.projectRepository.find({
      relations: ['admins'],
    })
    return { success: true, data: projects }
  }

  async create(createProjectDto: CreateProjectDto) {
    const project = await this.projectRepository.save({
      ...createProjectDto,
    })
    return { success: true }
  }

  // async update(updateProjectDto: UpdateProjectDto) {
  //   const project = await this.projectRepository.findOne({
  //     where: { id: updateProjectDto.id },
  //   })
  //   const updatedProject = await this.projectRepository.update(project, {
  //     ...updateProjectDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeProjectDto: RemoveProjectDto) {
    const project = await this.projectRepository.findOne({
      where: { id: removeProjectDto.id },
    })
    const deletedProject = await this.projectRepository.remove(project)
    return { success: true }
  }

  async relateAdmin(projectAdminDto: ProjectAdminDto) {
    const id = projectAdminDto.projectId
    const projectItem = await this.projectRepository.findOne({
      where: { id },
      relations: ['admins'],
    })
    // 清空之前的分配
    projectItem.admins = []
    await this.projectRepository.save(projectItem)
    // 过滤可能重复的用户
    const uniqueAdminIds = new Set(projectAdminDto.adminIds)
    // 逐个分配每个用户
    for (const adminId of uniqueAdminIds) {
      // 重构：如果不加 any 报错，应该是 AdminRO 但也有问题？
      const adminItem: any = await this.projectRepository.findOne({
        where: { id: adminId },
      })
      projectItem.admins.push(adminItem)
      await this.projectRepository.save(projectItem)
    }
    return { success: true, data: projectItem }
  }
}
