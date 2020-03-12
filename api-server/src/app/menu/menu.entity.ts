import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm'
import { RoleEntity } from '../role/role.entity'

@Entity('menu')
export class MenuEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 32 })
  code: string

  @Column({ length: 32 })
  name: string

  @Column({ length: 32 })
  path: string

  @Column()
  status: number

  @Column({ length: 100 })
  remark: string

  @Column({ length: 32 })
  pid: string

  @Column()
  isParent: number

  @ManyToMany(type => RoleEntity, role => role.menus)
  roles: RoleEntity[]
}
