import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateCollegeDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly name: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly remark: string
}

export class UpdateCollegeDto extends CreateCollegeDto {
}

export class RemoveCollegeDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
