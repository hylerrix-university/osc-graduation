import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { AppModule } from './app.module'
// import { connectSkyWalking } from './init/sky-apm'
import { swagger } from './init/swagger'
import { isDev, PORT } from './config'

// 连接 skyWalking 链路追踪
// if (!isDev) {
//   connectSkyWalking()
// }

export async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // 创建 swagger api 文档
  if (isDev) { swagger(app) }
  await app.listen(PORT)
  app.enableCors({
    origin: [
      'http://localhost:8080', // vue
    ],
  })
  // nacos 心跳
  // const registerService = app.select(RegisterModule).get(RegisterService)
  // registerService.registerModule()
  Logger.log(`Server running on http://localhost:${ PORT }`, '')
}

// todo cache redis
bootstrap()
