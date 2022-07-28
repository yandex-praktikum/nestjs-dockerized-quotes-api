import { Module } from '@nestjs/common';
import { QuotesController } from './quotes.controller';

@Module({
  controllers: [QuotesController],
})
export class QuotesModule {}
