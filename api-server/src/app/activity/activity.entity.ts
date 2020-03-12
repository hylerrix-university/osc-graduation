import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm'
import { TopicEntity } from '../topic/topic.entity'
import { UnitEntity } from '../unit/unit.entity'
import { FileEntity } from '../file/file.entity'
import { AdminEntity } from '../admin/admin.entity'
import { ArticleEntity } from '../article/article.entity'
import { PlatformEntity } from '../platform/platform.entity'

@Entity('activity')
export class ActivityEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 32, charset: 'utf8mb4' })
  name: string

  @CreateDateColumn()
  time: Date

  @Column()
  status: number

  @Column({ length: 100, charset: 'utf8mb4' })
  remark: string

  @OneToMany(type => TopicEntity, topic => topic.activity)
  topics: TopicEntity[]

  @ManyToOne(type => PlatformEntity, platform => platform.activitys)
  platform: PlatformEntity[]

  @ManyToMany(type => UnitEntity, unit => unit.activitys)
  @JoinTable()
  units: UnitEntity[]

  @ManyToMany(type => AdminEntity, admin => admin.activitys)
  admins: AdminEntity[]

  @ManyToMany(type => FileEntity, file => file.activitys)
  @JoinTable()
  files: FileEntity[]

  @ManyToMany(type => ArticleEntity, article => article.activitys)
  @JoinTable()
  articles: ArticleEntity[]
}
