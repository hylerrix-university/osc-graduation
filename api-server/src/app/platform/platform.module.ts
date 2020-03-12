import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { PlatformService } from './platform.service'
import { PlatformController } from './platform.controller'
import { PlatformEntity } from './platform.entity'
// import { PlatformResolver } from './platform.resolver'
import { AccountEntity } from '../account/account.entity'
import { ActivityEntity } from '../activity/activity.entity'
import { ChatEntity } from '../chat/chat.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    PlatformEntity,
    AccountEntity,
    ActivityEntity,
    ChatEntity,
  ])],
  controllers: [
    PlatformController,
  ],
  providers: [
    PlatformService,
  ],
})
export class PlatformModule { }
