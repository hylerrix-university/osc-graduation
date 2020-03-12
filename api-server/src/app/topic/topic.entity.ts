import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm'
import { ActivityEntity } from '../activity/activity.entity'
import { UserEntity } from '../user/user.entity'

@Entity('topic')
export class TopicEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ length: 50, charset: 'utf8mb4' })
  name: string

  @CreateDateColumn()
  time: Date

  @ManyToOne(type => ActivityEntity, activity => activity.topics)
  activity: ActivityEntity[]

  @ManyToOne(type => UserEntity, user => user.topics)
  user: UserEntity[]
}
