import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateHistoryDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly title: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly time: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly remark: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly orderBy: number
}

export class UpdateHistoryDto extends CreateHistoryDto {
}

export class RemoveHistoryDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
