import { Module } from '@nestjs/common';
import { QueryTypeEventService } from './query-type-event.service';
import { QueryTypeEventController } from './query-type-event.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerTpeventsEntity } from "../../entities/comerTpevents.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerTpeventsEntity]),
  ],
  providers: [QueryTypeEventService],
  controllers: [QueryTypeEventController]
})
export class QueryTypeEventModule {}
