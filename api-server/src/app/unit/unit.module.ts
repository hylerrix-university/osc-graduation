import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { UnitService } from './unit.service'
import { UnitController } from './unit.controller'
import { UnitEntity } from './unit.entity'
// import { UnitResolver } from './unit.resolver'
import { ActivityEntity } from '../activity/activity.entity'
import { EntityEntity } from '../entity/entity.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    UnitEntity,
    ActivityEntity,
    EntityEntity,
  ])],
  controllers: [
    UnitController,
  ],
  providers: [
    UnitService,
  ],
})
export class UnitModule { }
