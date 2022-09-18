import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { ComerEventosEntity } from "../../entities/comerEventos.entity";
import { GetMaxService } from './get-max.service';
import { GetMaxController } from './get-max.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerEventosEntity]),
  ],
  providers: [GetMaxService],
  controllers: [GetMaxController]
})
export class GetMaxModule {}
