import { Controller, Get, Post, Put, Delete } from '@nestjs/common'
import { Req, Res, Header, Query, Body, Param, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth.service'
import { LoginAdminDTO } from '../app/admin/admin.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
