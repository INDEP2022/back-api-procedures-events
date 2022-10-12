import { Module } from '@nestjs/common';
import { TemporaryFillingComerNopubService } from './temporary-filling-comer-nopub.service';
import { TemporaryFillingComerNopubController } from './temporary-filling-comer-nopub.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ComerLotesEntity} from "../../entities/comerLotes.entity";
import {ComerBienesxloteEntity} from "../../entities/comerBienesxlote.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerLotesEntity]),
    TypeOrmModule.forFeature([ComerBienesxloteEntity])
  ],
  providers: [TemporaryFillingComerNopubService],
  controllers: [TemporaryFillingComerNopubController]
})
export class TemporaryFillingComerNopubModule {}
