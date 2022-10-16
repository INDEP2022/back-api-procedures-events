import { Module } from '@nestjs/common';
import { MaxNumberService } from './max-number.service';
import { MaxNumberController } from './max-number.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerEventsEntity } from "../../entities/comerEvents.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerEventsEntity]),
  ],
  providers: [MaxNumberService],
  controllers: [MaxNumberController]
})
export class MaxNumberModule {}
