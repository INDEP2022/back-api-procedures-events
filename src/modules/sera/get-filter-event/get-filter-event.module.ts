import { Module } from '@nestjs/common';
import { GetFilterEventService } from './get-filter-event.service';
import { GetFilterEventController } from './get-filter-event.controller';

@Module({
  providers: [GetFilterEventService],
  controllers: [GetFilterEventController]
})
export class GetFilterEventModule {}
