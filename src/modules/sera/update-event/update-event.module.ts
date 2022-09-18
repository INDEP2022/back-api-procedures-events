import { Module } from '@nestjs/common';
import { UpdateEventService } from './update-event.service';
import { UpdateEventController } from './update-event.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerEventosEntity } from "../../entities/comerEventos.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerEventosEntity]),
  ],
  providers: [UpdateEventService],
  controllers: [UpdateEventController]
})
export class UpdateEventModule {}
