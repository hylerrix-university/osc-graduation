import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { IdeaEntity } from '../idea/idea.entity'
// import { CommentEntity } from '../comment/comment.entity'
// import { CommentService } from '../comment/comment.service'
import { RoleService } from './role.service'
import { RoleController } from './role.controller'
import { RoleEntity } from './role.entity'
// import { RoleResolver } from './role.resolver'
import { AdminEntity } from '../admin/admin.entity'
import { MenuEntity } from '../menu/menu.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    RoleEntity,
    AdminEntity,
    MenuEntity,
  ])],
  controllers: [
    RoleController,
  ],
  providers: [
    RoleService,
  ],
})
export class RoleModule { }
