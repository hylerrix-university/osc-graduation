import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm'
import { AdminEntity } from '../admin/admin.entity'

@Entity('report')
export class ReportEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ length: 32, charset: 'utf8mb4' })
  name: string

  @Column({ length: 500, charset: 'utf8mb4' })
  remark: string

  @CreateDateColumn()
  time: Date

  @ManyToMany(type => AdminEntity, admin => admin.reports)
  admins: AdminEntity[]
}
