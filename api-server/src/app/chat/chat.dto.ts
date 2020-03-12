import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateChatDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}

export class UpdateChatDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}

export class RemoveChatDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}

export class ChatAdminDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly chatId: number

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly adminIds: number[]
}