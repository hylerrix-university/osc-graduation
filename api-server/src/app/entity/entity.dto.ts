import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateEntityDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly name: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly count: number

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly time: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly status: number

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly unitId: number

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly adminId: number
}

export class UpdateEntityDto extends CreateEntityDto {
}

export class RemoveEntityDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
