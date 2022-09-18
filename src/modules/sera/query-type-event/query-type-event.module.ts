import { Module } from '@nestjs/common';
import { QueryTypeEventService } from './query-type-event.service';
import { QueryTypeEventController } from './query-type-event.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerTpeventosEntity } from "../../entities/comerTpeventos.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerTpeventosEntity]),
  ],
  providers: [QueryTypeEventService],
  controllers: [QueryTypeEventController]
})
export class QueryTypeEventModule {}
