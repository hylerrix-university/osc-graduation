import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateArticleDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly name: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly remark: string
}

export class UpdateArticleDto extends CreateArticleDto {}

export class RemoveArticleDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
