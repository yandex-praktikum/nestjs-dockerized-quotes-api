import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [QuotesModule],
  controllers: [AppController],
})
export class AppModule {}
