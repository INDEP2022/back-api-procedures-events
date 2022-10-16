import { Module } from '@nestjs/common';
import { GetEventStageService } from './get-event-stage.service';
import { GetEventStageController } from './get-event-stage.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerEventsTprocessEntity } from "../../entities/comerEventsTprocess.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerEventsTprocessEntity]),
  ],
  providers: [GetEventStageService],
  controllers: [GetEventStageController]
})
export class GetEventStageModule {}
