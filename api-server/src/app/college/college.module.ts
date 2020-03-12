import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { CollegeService } from './college.service'
import { CollegeController } from './college.controller'
import { CollegeEntity } from './college.entity'
// import { CollegeResolver } from './college.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([
    CollegeEntity,
  ])],
  controllers: [
    CollegeController,
  ],
  providers: [
    CollegeService,
  ],
})
export class CollegeModule { }
