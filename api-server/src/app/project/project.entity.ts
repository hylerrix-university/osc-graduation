import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm'
import { AdminEntity } from '../admin/admin.entity'

@Entity('project')
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 32 })
  name: string

  @Column({ length: 32 })
  type: string

  @Column({ length: 32, charset: 'utf8mb4' })
  remark: string

  @Column()
  status: number

  @ManyToMany(type => AdminEntity, admin => admin.projects)
  admins: AdminEntity[]
}
