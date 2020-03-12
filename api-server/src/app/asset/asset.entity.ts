import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm'
import { SponsorEntity } from '../sponsor/sponsor.entity'

@Entity('asset')
export class AssetEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  type: number

  @Column({ length: 32 })
  amount: string

  @Column({ length: 32 })
  unit: string

  @Column()
  adminId: number

  @CreateDateColumn()
  time: Date

  @ManyToOne(type => SponsorEntity, sponsor => sponsor.assets)
  sponsor: SponsorEntity[]
}
