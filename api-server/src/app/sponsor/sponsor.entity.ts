import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm'
import { EntityEntity } from '../entity/entity.entity'
import { AssetEntity } from '../asset/asset.entity'
import { AdminEntity } from '../admin/admin.entity'

@Entity('sponsor')
export class SponsorEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  type: number

  @Column({ length: 32, charset: 'utf8mb4' })
  content: string

  @Column({ length: 32, charset: 'utf8mb4' })
  unit: string

  @CreateDateColumn()
  time: Date

  @OneToMany(type => EntityEntity, entity => entity.sponsor)
  entitys: EntityEntity[]

  @OneToMany(type => AssetEntity, asset => asset.sponsor)
  assets: AssetEntity[]

  @ManyToOne(type => AdminEntity, admin => admin.sponsors)
  admin: AdminEntity[]
}
