import { Module } from '@nestjs/common';
import { MaxNumberService } from './max-number.service';
import { MaxNumberController } from './max-number.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerEventosEntity } from "../../entities/comerEventos.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerEventosEntity]),
  ],
  providers: [MaxNumberService],
  controllers: [MaxNumberController]
})
export class MaxNumberModule {}
