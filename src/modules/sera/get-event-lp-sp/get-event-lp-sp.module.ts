import { Module } from '@nestjs/common';
import { GetEventLpSpService } from './get-event-lp-sp.service';
import { GetEventLpSpController } from './get-event-lp-sp.controller';

@Module({
  providers: [GetEventLpSpService],
  controllers: [GetEventLpSpController]
})
export class GetEventLpSpModule {}
