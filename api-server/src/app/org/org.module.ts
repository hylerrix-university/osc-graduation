import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { OrgService } from './org.service'
import { OrgController } from './org.controller'
import { OrgEntity } from './org.entity'
// import { OrgResolver } from './org.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([
    OrgEntity,
  ])],
  controllers: [
    OrgController,
  ],
  providers: [
    OrgService,
  ],
})
export class OrgModule { }
