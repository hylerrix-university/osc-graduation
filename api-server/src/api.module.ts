// import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE, APP_GUARD } from '@nestjs/core'
import { Module } from '@nestjs/common'

// import { HttpErrorFilter } from '../shared/http-error.filter'
// import { LoggingInterceptor } from '../shared/logging.interceptor'
// import { CustomGlobalPipe } from '../shared/...'

import { AccountModule } from './app/account/account.module'
import { ActivityModule } from './app/activity/activity.module'
import { AdminModule } from './app/admin/admin.module'
import { AssetModule } from './app/asset/asset.module'
import { ChatModule } from './app/chat/chat.module'
import { CollegeModule } from './app/college/college.module'
import { DemandModule } from './app/demand/demand.module'
import { EntityModule } from './app/entity/entity.module'
import { FileModule } from './app/file/file.module'
import { HistoryModule } from './app/history/history.module'
import { LogModule } from './app/log/log.module'
import { MenuModule } from './app/menu/menu.module'
import { OrgModule } from './app/org/org.module'
import { PlatformModule } from './app/platform/platform.module'
import { ProjectModule } from './app/project/project.module'
import { ReportModule } from './app/report/report.module'
import { RoleModule } from './app/role/role.module'
import { SponsorModule } from './app/sponsor/sponsor.module'
import { TaskModule } from './app/task/task.module'
import { TopicModule } from './app/topic/topic.module'
import { UnitModule } from './app/unit/unit.module'
import { YardModule } from './app/yard/yard.module'
import { UserModule } from './app/user/user.module'
import { ArticleModule } from './app/article/article.module'

@Module({
  imports: [
    AccountModule,
    ActivityModule,
    AdminModule,
    ArticleModule,
    AssetModule,
    ChatModule,
    CollegeModule,
    DemandModule,
    EntityModule,
    FileModule,
    HistoryModule,
    LogModule,
    MenuModule,
    OrgModule,
    PlatformModule,
    ProjectModule,
    ReportModule,
    RoleModule,
    SponsorModule,
    TaskModule,
    TopicModule,
    UnitModule,
    UserModule,
    YardModule,
  ],
  providers: [
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpErrorFilter,
    // },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LoggingInterceptor,
    // },
    // {
    //   provide: APP_PIPE,
    //   useClass: CustomGlobalPipe,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
  exports: [
    AccountModule,
    ActivityModule,
    AdminModule,
    ArticleModule,
    AssetModule,
    ChatModule,
    CollegeModule,
    DemandModule,
    EntityModule,
    FileModule,
    HistoryModule,
    LogModule,
    MenuModule,
    OrgModule,
    PlatformModule,
    ProjectModule,
    ReportModule,
    RoleModule,
    SponsorModule,
    TaskModule,
    TopicModule,
    UnitModule,
    UserModule,
    YardModule,
  ],
})
export class ApiModule {}
