import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { LogService } from './log.service'
import { LogController } from './log.controller'
import { LogEntity } from './log.entity'
// import { LogResolver } from './log.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([
    LogEntity,
  ])],
  controllers: [
    LogController,
  ],
  providers: [
    LogService,
  ],
})
export class LogModule { }
