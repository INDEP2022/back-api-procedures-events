import { Module } from '@nestjs/common';
import { EventIdentificationAdService } from './event-identification-ad.service';
import { EventIdentificationAdController } from './event-identification-ad.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerEventsEntity } from "../../entities/comerEvents.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerEventsEntity]),
  ],
  providers: [EventIdentificationAdService],
  controllers: [EventIdentificationAdController]
})
export class EventIdentificationAdModule {}
