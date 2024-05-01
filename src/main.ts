import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3001;

  app.setGlobalPrefix('api/v1');
  await app.listen(port);
  console.log(`app use port ${port}`);
}
bootstrap();
