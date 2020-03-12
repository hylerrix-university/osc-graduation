import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { ActivityService } from './activity.service'
import { ActivityController } from './activity.controller'
import { ActivityEntity } from './activity.entity'
// import { ActivityResolver } from './activity.resolver'
import { TopicEntity } from '../topic/topic.entity'
import { UnitEntity } from '../unit/unit.entity'
import { AdminEntity } from '../admin/admin.entity'
import { FileEntity } from '../file/file.entity'
import { ArticleEntity } from '../article/article.entity'
import { PlatformEntity } from '../platform/platform.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    ActivityEntity,
    TopicEntity,
    UnitEntity,
    AdminEntity,
    FileEntity,
    ArticleEntity,
    PlatformEntity,
  ])],
  controllers: [
    ActivityController,
  ],
  providers: [
    ActivityService,
  ],
})
export class ActivityModule { }
