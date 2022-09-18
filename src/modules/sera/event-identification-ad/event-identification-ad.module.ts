import { Module } from '@nestjs/common';
import { EventIdentificationAdService } from './event-identification-ad.service';
import { EventIdentificationAdController } from './event-identification-ad.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerEventosEntity } from "../../entities/comerEventos.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerEventosEntity]),
  ],
  providers: [EventIdentificationAdService],
  controllers: [EventIdentificationAdController]
})
export class EventIdentificationAdModule {}
