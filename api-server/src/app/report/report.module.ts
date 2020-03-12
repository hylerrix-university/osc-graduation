import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { ReportService } from './report.service'
import { ReportController } from './report.controller'
import { ReportEntity } from './report.entity'
// import { ReportResolver } from './report.resolver'
import { AdminEntity } from '../admin/admin.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    ReportEntity,
    AdminEntity,
  ])],
  controllers: [
    ReportController,
  ],
  providers: [
    ReportService,
  ],
})
export class ReportModule { }
