import { Module } from '@nestjs/common';
import { DeleteEventCanService } from './delete-event-can.service';
import { DeleteEventCanController } from './delete-event-can.controller';

@Module({
  providers: [DeleteEventCanService],
  controllers: [DeleteEventCanController]
})
export class DeleteEventCanModule {}
