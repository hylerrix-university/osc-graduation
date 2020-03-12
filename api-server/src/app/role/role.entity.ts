import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm'
import { AdminEntity } from '../admin/admin.entity'
import { MenuEntity } from '../menu/menu.entity'

@Entity('role')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 32, charset: 'utf8mb4' })
  name: string

  @Column({ length: 32, charset: 'utf8mb4' })
  remark: string

  @Column()
  status: number

  @OneToMany(type => AdminEntity, admin => admin.role)
  admins: AdminEntity[]

  @ManyToMany(type => MenuEntity, menu => menu.roles)
  @JoinTable()
  menus: MenuEntity[]
}
