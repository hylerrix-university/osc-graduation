import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateActivityDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}

export class UpdateActivityDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}

export class RemoveActivityDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
