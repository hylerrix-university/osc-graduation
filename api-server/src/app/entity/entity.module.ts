import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { EntityService } from './entity.service'
import { EntityController } from './entity.controller'
import { EntityEntity } from './entity.entity'
// import { EntityResolver } from './entity.resolver'
import { AdminEntity } from '../admin/admin.entity'
import { SponsorEntity } from '../sponsor/sponsor.entity'
import { UnitEntity } from '../unit/unit.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    EntityEntity,
    AdminEntity,
    SponsorEntity,
    UnitEntity,
  ])],
  controllers: [
    EntityController,
  ],
  providers: [
    EntityService,
  ],
})
export class EntityModule { }
