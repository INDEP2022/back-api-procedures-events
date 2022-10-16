import { Module } from '@nestjs/common';
import { QueryStage2EventService } from './query-stage2-event.service';
import { QueryStage2EventController } from './query-stage2-event.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerEventsEntity } from "../../entities/comerEvents.entity";
import { ComerEventsTprocessEntity } from "../../entities/comerEventsTprocess.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerEventsEntity]),
    TypeOrmModule.forFeature([ComerEventsTprocessEntity]),
  ],
  providers: [QueryStage2EventService],
  controllers: [QueryStage2EventController]
})
export class QueryStage2EventModule {}
