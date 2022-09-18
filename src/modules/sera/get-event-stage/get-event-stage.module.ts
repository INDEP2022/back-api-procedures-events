import { Module } from '@nestjs/common';
import { GetEventStageService } from './get-event-stage.service';
import { GetEventStageController } from './get-event-stage.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerEventosTprocesoEntity } from "../../entities/comerEventosTproceso.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerEventosTprocesoEntity]),
  ],
  providers: [GetEventStageService],
  controllers: [GetEventStageController]
})
export class GetEventStageModule {}
