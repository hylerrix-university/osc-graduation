import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm'
import { PlatformEntity } from '../platform/platform.entity'

@Entity('account')
export class AccountEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 32 })
  account: string

  @Column({ length: 32 })
  password: string

  @Column()
  status: number

  @Column({ length: 100, charset: 'utf8mb4' })
  remark: string

  @ManyToOne(type => PlatformEntity, platform => platform.accounts)
  platform: PlatformEntity[]
}
