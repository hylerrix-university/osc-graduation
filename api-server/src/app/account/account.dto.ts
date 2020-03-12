import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateAccountDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly account: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly password: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly status: number

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly remark: string

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly platformId: number
}

export class UpdateAccountDto extends CreateAccountDto {}

export class RemoveAccountDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}
