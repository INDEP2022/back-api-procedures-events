import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UpdateAssetsTempService} from "./update-assets-temp.service";
import {UpdateAssetsTempController} from "./update-assets-temp.controller";
import {ComerBienesxloteEntity} from "../../entities/comerBienesxlote.entity";
import {ComerLotesEntity} from "../../entities/comerLotes.entity";
import {TmpBienesComerEntity} from "../../entities/tmpBienesComer.entity";
import {ComerEventosEntity} from "../../entities/comerEventos.entity";
import {TmpLotesComerEntity} from "../../entities/tmpLotesComer.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerBienesxloteEntity]),
    TypeOrmModule.forFeature([ComerLotesEntity]),
    TypeOrmModule.forFeature([TmpBienesComerEntity]),
    TypeOrmModule.forFeature([TmpLotesComerEntity]),
    TypeOrmModule.forFeature([ComerEventosEntity]),
  ],
  providers: [UpdateAssetsTempService],
  controllers: [UpdateAssetsTempController]
})
export class UpdateAssetsTempModule {}
