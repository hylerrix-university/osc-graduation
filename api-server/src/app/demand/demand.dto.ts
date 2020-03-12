import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateDemandDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly title: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly remark: string
}

export class UpdateDemandDto extends CreateDemandDto {
}

export class RemoveDemandDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
