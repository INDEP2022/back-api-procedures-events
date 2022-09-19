import { Module } from '@nestjs/common';
import { DeleteEventService } from './delete-event.service';
import { DeleteEventController } from './delete-event.controller';

@Module({
  providers: [DeleteEventService],
  controllers: [DeleteEventController]
})
export class DeleteEventModule {}
