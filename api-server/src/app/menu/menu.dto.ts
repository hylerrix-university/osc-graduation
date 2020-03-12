import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateMenuDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly code: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly name: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly path: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly pid: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly status: number

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly isParent: number

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly remark: string
}

export class UpdateMenuDto extends CreateMenuDto {
}

export class RemoveMenuDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
