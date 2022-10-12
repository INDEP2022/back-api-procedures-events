import { Module } from '@nestjs/common';
import { QueryFilterEventService } from './query-filter-event.service';
import { QueryFilterEventController } from './query-filter-event.controller';

@Module({
  providers: [QueryFilterEventService],
  controllers: [QueryFilterEventController]
})
export class QueryFilterEventModule {}
