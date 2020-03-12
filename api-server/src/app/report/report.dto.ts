import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateReportDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  name: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  remark: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  time: string
}

export class UpdateReportDto extends CreateReportDto {
}

export class RemoveReportDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: string
}
