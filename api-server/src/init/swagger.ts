import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export const swagger = (app: any) => {
  const options = new DocumentBuilder()
    .setTitle('凝果开源社 - API')
    .setDescription('接口文档')
    .setVersion('0.1')
    .addTag('')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
}
