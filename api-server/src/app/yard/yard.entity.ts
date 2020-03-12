import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm'

@Entity('yard')
export class YardEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 32, charset: 'utf8mb4' })
  name: string

  @Column({ length: 32, charset: 'utf8mb4' })
  position: string

  @Column({ length: 32, charset: 'utf8mb4' })
  contact: string

  @Column()
  status: number
}
