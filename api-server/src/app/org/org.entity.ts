import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm'

@Entity('org')
export class OrgEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ length: 32 })
  code: string

  @Column({ length: 32, charset: 'utf8mb4' })
  name: string

  @Column()
  owner: number

  @Column({ length: 32 })
  remark: string
}
