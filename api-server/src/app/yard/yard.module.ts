import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { YardService } from './yard.service'
import { YardController } from './yard.controller'
import { YardEntity } from './yard.entity'
// import { YardResolver } from './yard.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([
    YardEntity,
  ])],
  controllers: [
    YardController,
  ],
  providers: [
    YardService,
  ],
})
export class YardModule { }
