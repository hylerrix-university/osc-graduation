import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateSponsorDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly type: number

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly content: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly unit: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly time: string
}

export class UpdateSponsorDto extends CreateSponsorDto {
}

export class RemoveSponsorDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
