import { Module } from '@nestjs/common';
import { InsertEventService } from './insert-event.service';
import { InsertEventController } from './insert-event.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerEventosEntity } from "../../entities/comerEventos.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerEventosEntity]),
  ],

  providers: [InsertEventService],
  controllers: [InsertEventController]
})
export class InsertEventModule {}
