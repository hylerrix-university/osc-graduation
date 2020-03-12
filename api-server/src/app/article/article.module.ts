import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { ArticleService } from './article.service'
import { ArticleController } from './article.controller'
import { ArticleEntity } from './article.entity'
// import { ArticleResolver } from './artile.resolver'
import { ActivityEntity } from '../activity/activity.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    ArticleEntity,
    ActivityEntity,
  ])],
  controllers: [
    ArticleController,
  ],
  providers: [
    ArticleService,
  ],
})
export class ArticleModule { }
