import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { DemandService } from './demand.service'
import { DemandController } from './demand.controller'
import { DemandEntity } from './demand.entity'
// import { DemandResolver } from './demand.resolver'
import { AdminEntity } from '../admin/admin.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    DemandEntity,
    AdminEntity,
  ])],
  controllers: [
    DemandController,
  ],
  providers: [
    DemandService,
  ],
})
export class DemandModule { }
