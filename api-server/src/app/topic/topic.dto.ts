import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateTopicDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly name: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly time: string
}

export class UpdateTopicDto extends CreateTopicDto {
}

export class RemoveTopicDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}

export class RelateUserDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly topicId: number

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly userId: number
}
