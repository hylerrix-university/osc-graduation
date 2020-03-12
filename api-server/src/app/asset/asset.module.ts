import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { AssetService } from './asset.service'
import { AssetController } from './asset.controller'
import { AssetEntity } from './asset.entity'
// import { AssetResolver } from './asset.resolver'
import { SponsorEntity } from '../sponsor/sponsor.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    AssetEntity,
    SponsorEntity,
  ])],
  controllers: [
    AssetController,
  ],
  providers: [
    AssetService,
  ],
})
export class AssetModule { }
