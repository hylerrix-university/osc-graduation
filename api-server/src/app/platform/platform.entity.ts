import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm'
import { AccountEntity } from '../account/account.entity'
import { ActivityEntity } from '../activity/activity.entity'
import { ChatEntity } from '../chat/chat.entity'

@Entity('platform')
export class PlatformEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 32 })
  type: string

  @Column({ length: 32, charset: 'utf8mb4' })
  remark: string

  @OneToMany(type => AccountEntity, account => account.platform)
  accounts: AccountEntity[]

  @OneToMany(type => ActivityEntity, activity => activity.platform)
  activitys: ActivityEntity[]

  @OneToMany(type => ChatEntity, chat => chat.platform)
  chats: ChatEntity[]
}
