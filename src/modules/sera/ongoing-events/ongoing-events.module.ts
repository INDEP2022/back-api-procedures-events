import { Module } from '@nestjs/common';
import { OngoingEventsService } from './ongoing-events.service';
import { OngoingEventsController } from './ongoing-events.controller';

@Module({
  providers: [OngoingEventsService],
  controllers: [OngoingEventsController]
})
export class OngoingEventsModule {}
