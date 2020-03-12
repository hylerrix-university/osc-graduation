import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm'
import { TopicEntity } from '../topic/topic.entity'

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 32 })
  username: string

  @Column({ length: 32 })
  password: string

  @Column({ length: 32 })
  email: string

  @Column({ length: 32, charset: 'utf8mb4' })
  nickname: string

  @Column()
  sex: number

  @Column({ length: 32 })
  phone: string

  @Column({ length: 32 })
  github: string

  @Column({ length: 512 })
  avatar: string

  @Column()
  count: number

  @Column()
  status: number

  @OneToMany(type => TopicEntity, topic => topic.user)
  topics: TopicEntity[]
}
