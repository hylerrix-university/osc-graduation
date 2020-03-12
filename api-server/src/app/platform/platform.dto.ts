import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreatePlatformDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly type: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly remark: string
}

export class UpdatePlatformDto extends CreatePlatformDto {
}

export class RemovePlatformDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
