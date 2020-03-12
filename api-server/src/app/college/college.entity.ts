import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm'

@Entity('college')
export class CollegeEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ length: 32, charset: 'utf8mb4' })
  name: string

  @Column({ length: 500, charset: 'utf8mb4' })
  remark: string
}
