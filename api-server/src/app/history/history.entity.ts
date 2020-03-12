import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm'
import { AdminEntity } from '../admin/admin.entity'

@Entity('history')
export class HistoryEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ length: 32, charset: 'utf8mb4' })
  title: string

  @CreateDateColumn()
  time: Date

  @Column({ length: 500, charset: 'utf8mb4' })
  remark: string

  @Column()
  orderBy: number

  @ManyToMany(type => AdminEntity, admin => admin.historys)
  admins: AdminEntity[]
}
