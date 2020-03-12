import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { ChatService } from './chat.service'
import { ChatController } from './chat.controller'
import { ChatEntity } from './chat.entity'
// import { ChatResolver } from './chat.resolver'
import { AdminEntity } from '../admin/admin.entity'
import { PlatformEntity } from '../platform/platform.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    ChatEntity,
    AdminEntity,
    PlatformEntity,
  ])],
  controllers: [
    ChatController,
  ],
  providers: [
    ChatService,
  ],
})
export class ChatModule { }
