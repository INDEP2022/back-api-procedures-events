import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { ComerEventsEntity } from "../../entities/comerEvents.entity";
import { GetMaxService } from './get-max.service';
import { GetMaxController } from './get-max.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerEventsEntity]),
  ],
  providers: [GetMaxService],
  controllers: [GetMaxController]
})
export class GetMaxModule {}
