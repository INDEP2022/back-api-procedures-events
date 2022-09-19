import { Module } from '@nestjs/common';
import { QueryLcThirdService } from './query-lc-third.service';
import { QueryLcThirdController } from './query-lc-third.controller';

@Module({
  providers: [QueryLcThirdService],
  controllers: [QueryLcThirdController]
})
export class QueryLcThirdModule {}
