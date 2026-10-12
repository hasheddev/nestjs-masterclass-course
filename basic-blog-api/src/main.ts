import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger, VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Bog API')
    .setDescription('NestJs Blog API - Fundamentals Demo')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Auth', 'Authentication endpoints')
    .addTag('Authors', 'Author management')
    .addTag('Blogs', 'Blog post management')
    .addTag('Comments', 'Comment management')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  //app.use('/docs', basicAuth())
  //ass username and password to documentation
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  //   app.setGlobalPrefix('api');

  //   // /api/v1/controller
  //   app.enableVersioning({
  //     type: VersioningType.URI,
  //     prefix: 'v',
  //     defaultVersion: '1',
  //   });

  logger.log(`Application running on http://localhost:${port}`);
  logger.log(`Swagger docs at http://localhost:${port}/api`);
}
bootstrap();
