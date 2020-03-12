import { Controller, Get, Post, Put, Delete } from '@nestjs/common'
import { Req, Res, Header, Query, Body, Param, UseGuards } from '@nestjs/common'
import { ApiBearerAuth } from '@nestjs/swagger'
import { AppService } from './app.service'

@ApiBearerAuth()
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
