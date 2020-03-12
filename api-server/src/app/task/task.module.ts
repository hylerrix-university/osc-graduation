import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { TaskService } from './task.service'
import { TaskController } from './task.controller'
import { TaskEntity } from './task.entity'
// import { TaskResolver } from './task.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([
    TaskEntity,
  ])],
  controllers: [
    TaskController,
  ],
  providers: [
    TaskService,
  ],
})
export class TaskModule { }
