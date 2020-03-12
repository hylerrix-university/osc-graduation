import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateLogDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}

export class UpdateLogDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}

export class RemoveLogDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
