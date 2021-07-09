import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configPipes } from './pipes';
import { configSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configSwagger(app);

  configPipes(app);

  app.enableCors();
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
