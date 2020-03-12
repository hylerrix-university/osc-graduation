import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm'
import { AdminEntity } from '../admin/admin.entity'
import { SponsorEntity } from '../sponsor/sponsor.entity'
import { UnitEntity } from '../unit/unit.entity'

@Entity('entity')
export class EntityEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 32, charset: 'utf8mb4' })
  name: string

  @Column()
  count: number

  @CreateDateColumn()
  time: Date

  @Column()
  status: number

  @ManyToOne(type => AdminEntity, admin => admin.entitys)
  admin: AdminEntity[]

  @ManyToOne(type => UnitEntity, unit => unit.entitys)
  unit: UnitEntity[]

  @ManyToOne(type => SponsorEntity, sponsor => sponsor.entitys)
  sponsor: SponsorEntity[]
}
