import { Module } from '@nestjs/common';
import { CleanEventService } from './clean-event.service';
import { CleanEventController } from './clean-event.controller';

@Module({
  providers: [CleanEventService],
  controllers: [CleanEventController]
})
export class CleanEventModule {}
