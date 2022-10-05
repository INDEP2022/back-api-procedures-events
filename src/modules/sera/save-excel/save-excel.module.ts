import { Module } from '@nestjs/common';
import { SaveExcelService } from './save-excel.service';
import { SaveExcelController } from './save-excel.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ComerLotesEntity} from "../../entities/comerLotes.entity";
import {CatTransferenteEntity} from "../../entities/catTransferente.entity";
import {ComerBienesxloteEntity} from "../../entities/comerBienesxlote.entity";
import {ComerClientesEntity} from "../../entities/comerClientes.entity";
import {BienesEntity} from "../../entities/bienes.entity";


@Module({
  imports: [
    TypeOrmModule.forFeature([ComerLotesEntity]),
    TypeOrmModule.forFeature([CatTransferenteEntity]),
    TypeOrmModule.forFeature([ComerBienesxloteEntity]),
    TypeOrmModule.forFeature([ComerClientesEntity]),
    TypeOrmModule.forFeature([BienesEntity]),
  ],
  providers: [SaveExcelService],
  controllers: [SaveExcelController]
})
export class SaveExcelModule {}
