import { Module } from '@nestjs/common';
import { QueryGeneralEventsService } from './query-general-events.service';
import { QueryGeneralEventsController } from './query-general-events.controller';

@Module({
  providers: [QueryGeneralEventsService],
  controllers: [QueryGeneralEventsController]
})
export class QueryGeneralEventsModule {}
