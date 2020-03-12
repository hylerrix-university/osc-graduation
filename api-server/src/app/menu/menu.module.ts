import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { MenuService } from './menu.service'
import { MenuController } from './menu.controller'
import { MenuEntity } from './menu.entity'
// import { MenuResolver } from './menu.resolver'
import { AdminEntity } from '../admin/admin.entity'
import { RoleEntity } from '../role/role.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    MenuEntity,
    AdminEntity,
    RoleEntity,
  ])],
  controllers: [
    MenuController,
  ],
  providers: [
    MenuService,
  ],
})
export class MenuModule { }
