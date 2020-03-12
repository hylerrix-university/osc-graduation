import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm'
import { AdminEntity } from '../admin/admin.entity'

@Entity('demand')
export class DemandEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ length: 32, charset: 'utf8mb4' })
  title: string

  @Column({ length: 500, charset: 'utf8mb4' })
  remark: string

  @Column()
  orderBy: number

  @ManyToMany(type => AdminEntity, admin => admin.demands)
  admins: AdminEntity[]
}
