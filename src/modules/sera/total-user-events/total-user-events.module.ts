import { Module } from '@nestjs/common';
import { TotalUserEventsService } from './total-user-events.service';
import { TotalUserEventsController } from './total-user-events.controller';

@Module({
  providers: [TotalUserEventsService],
  controllers: [TotalUserEventsController]
})
export class TotalUserEventsModule {}
