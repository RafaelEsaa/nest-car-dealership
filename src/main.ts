import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Para remover los datos que no estan especificados en el DTO como request
      forbidNonWhitelisted: true, // Muestra las propiedades de los datos que se estan enviando adicional sin solicitar
    }),
  );
  await app.listen(3000);
}
bootstrap();
