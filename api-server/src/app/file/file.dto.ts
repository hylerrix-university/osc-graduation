import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateFileDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly name: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly remark: string
}

export class UpdateFileDto extends CreateFileDto {
}

export class RemoveFileDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
