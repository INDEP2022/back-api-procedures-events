import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ComerBienesxloteEntity} from "../../entities/comerBienesxlote.entity";
import {ComerLotesEntity} from "../../entities/comerLotes.entity";

@Injectable()
export class TemporaryFillingComerNopubService {
    constructor(
        @InjectRepository(ComerLotesEntity) private comerLotesRepository: Repository<ComerLotesEntity>,
        @InjectRepository(ComerBienesxloteEntity) private comerBienesxloteRepository: Repository<ComerBienesxloteEntity>,
    ) {}

    async getTempData(pEventIn: number) {
        const B_EVE = await this.comerLotesRepository
            .createQueryBuilder('comer_lotes')
            .select([
                "comer_bienesxlote.goodsId",
                "comer_lotes.publicLot",
                "comer_lotes.lotId",
            ])
            .where("comer_lotes.eventId = :eventId", { eventId: pEventIn })
            .andWhere("comer_bienesxlote.lotId = comer_lotes.lotId")
            .from(ComerBienesxloteEntity, 'comer_bienesxlote')
            .getRawMany()

        console.log(B_EVE[0])

        return {
            data: B_EVE,
            count: B_EVE.length
        }
    }
}
