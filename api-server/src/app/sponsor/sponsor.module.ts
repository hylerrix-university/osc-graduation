import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { SponsorService } from './sponsor.service'
import { SponsorController } from './sponsor.controller'
import { SponsorEntity } from './sponsor.entity'
// import { SponsorResolver } from './sponsor.resolver'
import { EntityEntity } from '../entity/entity.entity'
import { AssetEntity } from '../asset/asset.entity'
import { AdminEntity } from '../admin/admin.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    SponsorEntity,
    EntityEntity,
    AssetEntity,
    AdminEntity,
  ])],
  controllers: [
    SponsorController,
  ],
  providers: [
    SponsorService,
  ],
})
export class SponsorModule { }
