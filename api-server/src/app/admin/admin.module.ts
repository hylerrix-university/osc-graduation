import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AdminEntity } from './admin.entity'
import { AdminController } from './admin.controller'
import { AdminService } from './admin.service'
import { RoleEntity } from '../role/role.entity'
import { ActivityEntity } from '../activity/activity.entity'
import { ProjectEntity } from '../project/project.entity'
import { ChatEntity } from '../chat/chat.entity'
import { EntityEntity } from '../entity/entity.entity'
import { SponsorEntity } from '../sponsor/sponsor.entity'
import { ReportEntity } from '../report/report.entity'
import { HistoryEntity } from '../history/history.entity'
import { DemandEntity } from '../demand/demand.entity'

@Module({
  imports: [ TypeOrmModule.forFeature([
    AdminEntity,
    RoleEntity,
    ActivityEntity,
    ProjectEntity,
    ChatEntity,
    EntityEntity,
    SponsorEntity,
    ReportEntity,
    HistoryEntity,
    DemandEntity,
  ]) ],
  controllers: [ AdminController ],
  providers: [ AdminService ],
})
export class AdminModule {}
