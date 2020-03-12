import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateOrgDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly code: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly name: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly owner: number

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly remark: string
}

export class UpdateOrgDto extends CreateOrgDto {
}

export class RemoveOrgDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
