import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm'
import { ActivityEntity } from '../activity/activity.entity'

@Entity('file')
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ length: 32, charset: 'utf8mb4' })
  name: string

  @Column({ length: 500, charset: 'utf8mb4' })
  path: string

  @ManyToMany(type => ActivityEntity, activity => activity.files)
  activitys: ActivityEntity[]
}
