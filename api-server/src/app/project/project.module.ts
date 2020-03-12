import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { ProjectService } from './project.service'
import { ProjectController } from './project.controller'
import { ProjectEntity } from './project.entity'
// import { ProjectResolver } from './project.resolver'
import { AdminEntity } from '../admin/admin.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    ProjectEntity,
    AdminEntity,
  ])],
  controllers: [
    ProjectController,
  ],
  providers: [
    ProjectService,
  ],
})
export class ProjectModule { }
