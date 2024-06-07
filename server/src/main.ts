import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';
import { AllExceptionsFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const cors = {
    origin: ['http://localhost:5173'],
    methods: 'GET, HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  };
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  app.enableCors(cors);
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
