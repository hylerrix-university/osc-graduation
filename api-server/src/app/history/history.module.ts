import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { HistoryService } from './history.service'
import { HistoryController } from './history.controller'
import { HistoryEntity } from './history.entity'
// import { HistoryResolver } from './history.resolver'
import { AdminEntity } from '../admin/admin.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    HistoryEntity,
    AdminEntity,
  ])],
  controllers: [
    HistoryController,
  ],
  providers: [
    HistoryService,
  ],
})
export class HistoryModule { }
