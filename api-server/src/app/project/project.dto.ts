import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateProjectDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}

export class UpdateProjectDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}

export class RemoveProjectDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly id: number
}

export class ProjectAdminDto {
  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly projectId: number

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  readonly adminIds: number[]
}
