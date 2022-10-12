import { Module } from '@nestjs/common';
import { ValEventService } from './val-event.service';
import { ValEventController } from './val-event.controller';

@Module({
  providers: [ValEventService],
  controllers: [ValEventController]
})
export class ValEventModule {}
