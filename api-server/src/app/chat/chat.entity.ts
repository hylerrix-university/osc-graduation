import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm'
import { AdminEntity } from '../admin/admin.entity'
import { PlatformEntity } from '../platform/platform.entity'

@Entity('chat')
export class ChatEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 32 })
  type: string

  @Column({ length: 32, charset: 'utf8mb4' })
  name: string

  @Column({ length: 32, charset: 'utf8mb4' })
  remark: string

  @Column()
  status: number

  @ManyToOne(type => PlatformEntity, platform => platform.chats)
  platform: PlatformEntity[]

  @ManyToMany(type => AdminEntity, admin => admin.chats)
  admins: AdminEntity[]
}
