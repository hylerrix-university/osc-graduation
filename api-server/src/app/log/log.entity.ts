import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm'

@Entity('log')
export class LogEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 32 })
  type: string

  @Column({ length: 32, charset: 'utf8mb4' })
  path: string

  @CreateDateColumn()
  time: Date

  @Column()
  adminId: number

  @Column()
  status: number
}
