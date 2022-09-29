import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ComerBienesxloteEntity} from "../../entities/comerBienesxlote.entity";
import {ComerLotesEntity} from "../../entities/comerLotes.entity";
import {TmpBienesComerEntity} from "../../entities/tmpBienesComer.entity";
import {exists} from "fs";

@Injectable()
export class UpdateAssetsTempService {
    constructor(
        @InjectRepository(ComerBienesxloteEntity) private comerBienesxloteRepository: Repository<ComerBienesxloteEntity>,
        @InjectRepository(ComerLotesEntity) private comerLotesRepository: Repository<ComerLotesEntity>,
        // @InjectRepository(TmpBienesComerEntity) private tmpBienesComerRepository: Repository<TmpBienesComerEntity>,
    ) {
    }

    async getTemp(eventIdIn: number) {
        const cursorBEVE = await this.comerLotesRepository
            .createQueryBuilder('comer_lotes')
            .innerJoinAndSelect(ComerBienesxloteEntity, "comer_bienesxlote", "comer_bienesxlote.lotId = comer_lotes.lotId")
            .select([
                'comer_bienesxlote.goodsNo',
                'comer_bienesxlote.goodsLoteId',
                'comer_bienesxlote.baseValue',
                'comer_lotes.publicLot',
                'comer_lotes.description',
                'comer_lotes.lotId',
            ])
            .where({eventId: eventIdIn})
            .getRawMany()
        return {
            data: cursorBEVE,
            count: cursorBEVE.length
        }
    }
}
