import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'

import { AuthModule } from './common/auth.module'
import { AuthService } from './common/auth.service'
import { JwtStrategy } from './common/jwt.strategy'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ApiModule } from './api.module'

@Module({
  imports: [
    // TypeOrmModule.forRoot(),
    // 重构：只写在 ormconfig.json 中的话，报错：
    // Option "database" is not set in your connection options,
    // please define "database" option in your connection options or ormconfig.json
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ningo-osc',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    ApiModule,
  ],
  controllers: [ AppController ],
  providers: [
    AppService,
    AuthService,
    JwtStrategy,
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
