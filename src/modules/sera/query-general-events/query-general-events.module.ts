import { Module } from '@nestjs/common';
import { QueryGeneralEventsService } from './query-general-events.service';
import { QueryGeneralEventsController } from './query-general-events.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerEventsEntity } from "../../entities/comerEvents.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerEventsEntity]),
  ],
  providers: [QueryGeneralEventsService],
  controllers: [QueryGeneralEventsController]
})
export class QueryGeneralEventsModule {}
