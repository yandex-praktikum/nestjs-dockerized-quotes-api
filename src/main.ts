import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('QuotesAPI')
    .setContact(
      'Yandex Practicum (Repostiory)',
      'https://github.com/yandex-praktikum/nestjs-quotes-api',
      '',
    )
    .setDescription('Простой API цитат на Nest.js')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
