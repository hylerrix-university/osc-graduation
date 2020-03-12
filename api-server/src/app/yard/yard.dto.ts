import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateYardDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly name: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly position: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly contact: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly status: number
}

export class UpdateYardDto extends CreateYardDto {
}

export class RemoveYardDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
