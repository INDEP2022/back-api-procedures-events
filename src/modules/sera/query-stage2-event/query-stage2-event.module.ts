import { Module } from '@nestjs/common';
import { QueryStage2EventService } from './query-stage2-event.service';
import { QueryStage2EventController } from './query-stage2-event.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerEventosEntity } from "../../entities/comerEventos.entity";
import { ComerEventosTprocesoEntity } from "../../entities/comerEventosTproceso.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerEventosEntity]),
    TypeOrmModule.forFeature([ComerEventosTprocesoEntity]),
  ],
  providers: [QueryStage2EventService],
  controllers: [QueryStage2EventController]
})
export class QueryStage2EventModule {}
