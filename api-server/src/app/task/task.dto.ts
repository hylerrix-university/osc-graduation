import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateTaskDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly name: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly remark: string
}

export class UpdateTaskDto extends CreateTaskDto {
}

export class RemoveTaskDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
