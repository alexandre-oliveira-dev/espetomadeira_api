import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { route } from './routes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(route);
  await app.listen(3000);
}
bootstrap();
