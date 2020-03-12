import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateUnitDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly name: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly remark: string
}

export class UpdateUnitDto extends CreateUnitDto {
}

export class RemoveUnitDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
