import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { TopicService } from './topic.service'
import { TopicController } from './topic.controller'
import { TopicEntity } from './topic.entity'
// import { TopicResolver } from './topic.resolver'
// import { ActivityEntity } from '../activity/activity.entity'
import { UserEntity } from '../user/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    TopicEntity,
    // ActivityEntity,
    UserEntity,
  ])],
  controllers: [
    TopicController,
  ],
  providers: [
    TopicService,
  ],
})
export class TopicModule { }
