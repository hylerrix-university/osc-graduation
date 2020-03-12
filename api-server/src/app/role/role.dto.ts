import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateRoleDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly name: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly status: number

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly remark: string
}

export class UpdateRoleDto extends CreateRoleDto {
}

export class RelateAdminDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly roleId: number

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly adminIds: number[]
}

export class RelateMenuDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly roleId: number

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly menuIds: number[]
}

export class RemoveRoleDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
