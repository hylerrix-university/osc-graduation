import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'
import { AdminRole } from './admin.enum'

export class LoginAdminDTO {
  @ApiModelProperty()
  @IsNotEmpty()
  readonly username: string

  @ApiModelProperty()
  @IsNotEmpty()
  readonly password: string
}

export class CreateAdminDto {
  @ApiModelProperty()
  @IsNotEmpty()
  username: string

  @ApiModelProperty()
  @IsNotEmpty()
  sex: number

  @ApiModelProperty()
  @IsNotEmpty()
  email: string

  @ApiModelProperty()
  @IsNotEmpty()
  nickname: string
}

export class UpdateAdminDto {
  @ApiModelProperty()
  @IsNotEmpty()
  username?: string

  @ApiModelProperty()
  @IsNotEmpty()
  password?: string

  @ApiModelProperty()
  @IsNotEmpty()
  email?: string

  @ApiModelProperty()
  @IsNotEmpty()
  nickname?: string

  @ApiModelProperty()
  @IsNotEmpty()
  sex?: number

  @ApiModelProperty()
  @IsNotEmpty()
  phone?: string

  @ApiModelProperty()
  @IsNotEmpty()
  github?: string

  @ApiModelProperty()
  @IsNotEmpty()
  avatar?: string
}

export class RemoveAdminDto {
  @ApiModelProperty()
  @IsNotEmpty()
  readonly id: number
}

export class AdminRO {
  id: number
  username: string
  password?: string
  email?: string
  nickname?: string
  sex?: number
  phone?: string
  github?: string
  avatar?: string
  count?: number
  status?: number
  token?: string
  // ideas?: IdeaEntity[]
  // bookmarks?: IdeaEntity[]
}
