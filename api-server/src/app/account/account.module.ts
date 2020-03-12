import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { AccountService } from './account.service'
import { AccountController } from './account.controller'
import { AccountEntity } from './account.entity'
// import { AccountResolver } from './account.resolver'
import { PlatformEntity } from '../platform/platform.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    AccountEntity,
    PlatformEntity,
  ])],
  controllers: [
    AccountController,
  ],
  providers: [
    AccountService,
  ],
})
export class AccountModule { }
