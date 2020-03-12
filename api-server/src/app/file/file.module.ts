import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { FileService } from './file.service'
import { FileController } from './file.controller'
import { FileEntity } from './file.entity'
// import { FileResolver } from './file.resolver'
import { ActivityEntity } from '../activity/activity.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    FileEntity,
    ActivityEntity,
  ])],
  controllers: [
    FileController,
  ],
  providers: [
    FileService,
  ],
})
export class FileModule { }
