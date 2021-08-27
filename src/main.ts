import { ValidationPipe } from '@nestjs/common';
import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  //app.useGlobalFilters(new BaseExceptionFilter())
  app.enableCors()
  await app.listen(3000);
}
bootstrap();
