import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm'
import { ActivityEntity } from '../activity/activity.entity'

@Entity('article')
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 32, charset: 'utf8mb4' })
  name: string

  @Column({ length: 500, charset: 'utf8mb4' })
  remark: string

  @ManyToMany(type => ActivityEntity, activity => activity.articles)
  activitys: ActivityEntity[]
}
