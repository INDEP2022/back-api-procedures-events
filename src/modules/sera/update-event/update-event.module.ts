import { Module } from '@nestjs/common';
import { UpdateEventService } from './update-event.service';
import { UpdateEventController } from './update-event.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerEventsEntity } from "../../entities/comerEvents.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerEventsEntity]),
  ],
  providers: [UpdateEventService],
  controllers: [UpdateEventController]
})
export class UpdateEventModule {}
