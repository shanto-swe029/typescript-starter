import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  /**
   * By default, if any error happens while creating the application this app will exit with the code 1.
   * To make it throw an error instead disable the option.
   */
  NestFactory.create(AppModule, { abortOnError: false });
}
bootstrap();
