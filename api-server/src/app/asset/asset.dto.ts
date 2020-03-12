import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateAssetDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly type: number

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly amount: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly unit: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly adminId: number

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly time: string
}

export class UpdateAssetDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}

export class RemoveAssetDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
