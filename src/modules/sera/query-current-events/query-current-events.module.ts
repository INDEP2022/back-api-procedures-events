import { Module } from '@nestjs/common';
import { QueryCurrentEventsService } from './query-current-events.service';
import { QueryCurrentEventsController } from './query-current-events.controller';

@Module({
  providers: [QueryCurrentEventsService],
  controllers: [QueryCurrentEventsController]
})
export class QueryCurrentEventsModule {}
