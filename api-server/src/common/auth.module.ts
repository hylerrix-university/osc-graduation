import { Module, forwardRef } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'
// import { AdminEntity } from '../app/admin/admin.entity'
// import { TypeOrmModule } from '@nestjs/typeorm'
// import { AdminService } from '../app/admin/admin.service'
import { AdminModule } from '../app/admin/admin.module'

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  controllers: [ AuthController] ,
  providers: [
    AuthService,
    JwtStrategy,
  ],
})
export class AuthModule {}
