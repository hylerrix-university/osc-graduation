import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  OneToMany,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from 'typeorm'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

// import { IdeaEntity } from '../idea/idea.entity'
import { AdminRO } from './admin.dto'
import { RoleEntity } from '../role/role.entity'
import { ActivityEntity } from '../activity/activity.entity'
import { ProjectEntity } from '../project/project.entity'
import { ChatEntity } from '../chat/chat.entity'
import { EntityEntity } from '../entity/entity.entity'
import { SponsorEntity } from '../sponsor/sponsor.entity'
import { ReportEntity } from '../report/report.entity'
import { HistoryEntity } from '../history/history.entity'
import { DemandEntity } from '../demand/demand.entity'

@Entity('admin')
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 32 })
  username: string

  @Column({ length: 60 })
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

  @OneToMany(type => SponsorEntity, sponsor => sponsor.admin)
  sponsors: SponsorEntity[]

  @ManyToOne(type => RoleEntity, role => role.admins)
  role: RoleEntity[]

  @ManyToMany(type => ActivityEntity, activity => activity.admins)
  @JoinTable()
  activitys: ActivityEntity[]

  @ManyToMany(type => ProjectEntity, project => project.admins)
  @JoinTable()
  projects: ProjectEntity[]

  @ManyToMany(type => ChatEntity, chat => chat.admins)
  @JoinTable()
  chats: ChatEntity[]

  @OneToMany(type => EntityEntity, entity => entity.admin)
  entitys: EntityEntity[]

  @ManyToMany(type => ReportEntity, report => report.admins)
  @JoinTable()
  reports: ReportEntity[]

  @ManyToMany(type => HistoryEntity, history => history.admins)
  @JoinTable()
  historys: HistoryEntity[]

  @ManyToMany(type => DemandEntity, demand => demand.admins)
  @JoinTable()
  demands: DemandEntity[]

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10)
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password)
  }

  toResponseObject(showToken: boolean = true): AdminRO {
    const { id, username, token } = this
    const responseObject: AdminRO = {
      id,
      username,
    }
    // if (this.ideas) {
    //   responseObject.ideas = this.ideas
    // }
    if (showToken) {
      responseObject.token = token
    }

    return responseObject
  }

  private get token(): string {
    const { username } = this
    return jwt.sign(
      { username },
      // process.env.SECRET,
      'ThisIsASecretKey',
      { expiresIn: '3600' },
    )
  }
}
