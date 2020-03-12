import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiModelProperty()
  @IsNotEmpty()
  username: string

  @ApiModelProperty()
  @IsNotEmpty()
  password: string

  @ApiModelProperty()
  @IsNotEmpty()
  email: string

  @ApiModelProperty()
  @IsNotEmpty()
  nickname: string

  @ApiModelProperty()
  @IsNotEmpty()
  sex: number

  @ApiModelProperty()
  @IsNotEmpty()
  phone: string

  @ApiModelProperty()
  @IsNotEmpty()
  github: string

  @ApiModelProperty()
  @IsNotEmpty()
  avatar: string
}

export class UpdateUserDto {
  @ApiModelProperty()
  @IsNotEmpty()
  readonly id: number

  @ApiModelProperty()
  @IsNotEmpty()
  username: string

  @ApiModelProperty()
  @IsNotEmpty()
  password: string

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

export class RemoveUserDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
