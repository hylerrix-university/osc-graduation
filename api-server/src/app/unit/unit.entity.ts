import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm'
import { ActivityEntity } from '../activity/activity.entity'
import { EntityEntity } from '../entity/entity.entity'

@Entity('unit')
export class UnitEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 32, charset: 'utf8mb4' })
  name: string

  @Column({ length: 500, charset: 'utf8mb4' })
  remark: string

  @OneToMany(type => EntityEntity, entity => entity.unit)
  entitys: EntityEntity[]

  @ManyToMany(type => ActivityEntity, activity => activity.units)
  activitys: ActivityEntity[]
}
