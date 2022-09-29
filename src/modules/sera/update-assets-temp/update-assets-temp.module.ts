import { Module } from '@nestjs/common';
import { UpdateAssetsTempService } from './update-assets-temp.service';
import { UpdateAssetsTempController } from './update-assets-temp.controller';
import {ComerBienesxloteEntity} from "../../entities/comerBienesxlote.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ComerLotesEntity} from "../../entities/comerLotes.entity";



@Module({
  imports: [
    TypeOrmModule.forFeature([ComerBienesxloteEntity]),
    TypeOrmModule.forFeature([ComerLotesEntity]),
  ],
  providers: [UpdateAssetsTempService],
  controllers: [UpdateAssetsTempController]
})
export class UpdateAssetsTempModule {}
