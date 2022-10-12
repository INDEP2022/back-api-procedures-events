import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ComerBienesxloteEntity} from "../../entities/comerBienesxlote.entity";
import {ComerLotesEntity} from "../../entities/comerLotes.entity";
import {TmpBienesComerEntity} from "../../entities/tmpBienesComer.entity";
import {TmpLotesComerEntity} from "../../entities/tmpLotesComer.entity";
import {ComerEventosEntity} from "../../entities/comerEventos.entity";

@Injectable()
export class UpdateAssetsTempService {
    constructor(
        @InjectRepository(ComerBienesxloteEntity) private comerBienesxloteRepository: Repository<ComerBienesxloteEntity>,
        @InjectRepository(ComerLotesEntity) private comerLotesRepository: Repository<ComerLotesEntity>,
        @InjectRepository(TmpBienesComerEntity) private tmpBienesComerRepository: Repository<TmpBienesComerEntity>,
        @InjectRepository(TmpLotesComerEntity) private tmpLotesComerRepository: Repository<TmpLotesComerEntity>,
        @InjectRepository(ComerEventosEntity) private comerEventosRepository: Repository<ComerEventosEntity>,
    ) {
    }

    async getTemp(eventIdIn: number) {

        // const A = await this.comerBienesxloteRepository
        //     .createQueryBuilder("comer_bienesxlote")
        //     .select([
        //         'comer_lotes.eventId',
        //         'comer_bienesxlote.lotId',
        //         'comer_bienesxlote.goodsId',
        //         'comer_bienesxlote.goodsLoteId',
        //         'comer_bienesxlote.baseValue',
        //         'comer_lotes.publicLot',
        //         'comer_lotes.description',
        //         'comer_lotes.lotId',
        //     ])
        //     .where("comer_bienesxlote.lotId = comer_lotes.lotId")
        //     .andWhere("comer_lotes.eventId = :eventId", { eventId: eventIdIn })
        //     // .leftJoin(subQuery => {
        //     //     return subQuery
        //     //         .select("1")
        //     //         .from(TmpBienesComerEntity, 'tmp_bienes_comer')
        //     //         .where("comer_bienesxlote.goodsId = tmp_bienes_comer.goodsId")
        //     //         .andWhere("comer_lotes.lotId = tmp_bienes_comer.lotId")
        //     // }, "B")
        //     .from(ComerLotesEntity, 'comer_lotes')
        //     .getRawMany()


        const A = await this.comerBienesxloteRepository
            .createQueryBuilder("tmp_bienes_comer")
            .select("1")
            .from(TmpBienesComerEntity, 'tmp_bienes_comer')
            .where("comer_bienesxlote.goodsId = tmp_bienes_comer.goodsId")
            .andWhere("comer_lotes.lotId = tmp_bienes_comer.lotId")
            .getRawMany()







        // //Cursor B_EVE
        // const A = await this.comerBienesxloteRepository
        //     .createQueryBuilder('comer_bienesxlote')
        //     .innerJoinAndSelect(ComerLotesEntity, "comer_lotes", "comer_bienesxlote.lotId = comer_lotes.lotId")
        // const B = await this.tmpBienesComerRepository
        //     .createQueryBuilder('tmp_bienes_comer')
        //     .innerJoinAndSelect(ComerBienesxloteEntity, "comer_bienesxlote","comer_bienesxlote.goodsId = tmp_bienes_comer.goodsId" )
        //     .innerJoinAndSelect(ComerLotesEntity, "comer_lotes", "comer_lotes.lotId = tmp_bienes_comer.lotId"  )
        //     .select([
        //         'comer_bienesxlote.goodsId',
        //         'comer_bienesxlote.goodsLoteId',
        //         'comer_bienesxlote.baseValue',
        //         'comer_lotes.publicLot',
        //         'comer_lotes.description',
        //         'comer_lotes.lotId',
        //     ])
        //     .where("comer_lotes.eventId = :eventId", { eventId: eventIdIn })
        //     .getRawMany()
        // const B = await this.tmpBienesComerRepository
        //     .createQueryBuilder('tmp_bienes_comer')
        //     .innerJoinAndSelect(ComerBienesxloteEntity, "comer_bienesxlote","comer_bienesxlote.goodsId = tmp_bienes_comer.goodsId" )
        //     .innerJoinAndSelect(ComerLotesEntity, "comer_lotes", "comer_lotes.lotId = tmp_bienes_comer.lotId"  )
        //     .select([
        //            'comer_bienesxlote.goodsId',
        //            'comer_bienesxlote.goodsLoteId',
        //            'comer_bienesxlote.baseValue',
        //            'comer_lotes.publicLot',
        //            'comer_lotes.description',
        //            'comer_lotes.lotId',
        //         ])
        //     .getRawMany()



        // //Cursor CL
        // const cursorCL = await this.comerLotesRepository
        //     .createQueryBuilder('comer_lotes')
        //     .select([
        //         'comer_lotes.lotId',
        //         'comer_lotes.idEstatusvta',
        //         'comer_lotes.eventId',
        //         'comer_lotes.publicLot',
        //         'comer_lotes.valorBase',
        //         'comer_lotes.referenciag',
        //         'comer_lotes.noTransferente',
        //         'comer_lotes.description',
        //         'comer_lotes.precioGarantia',
        //     ])
        //     .where({eventId: eventIdIn})
        //     .getRawMany()
        //
        // //Cursor CL_E
        // const CL_E = await this.comerLotesRepository
        //     .createQueryBuilder('comer_lotes')
        //     .select([
        //         'comer_lotes.lotId',
        //         'comer_lotes.idEstatusvta',
        //         'comer_lotes.eventId',
        //         'comer_lotes.publicLot',
        //         'comer_lotes.valorBase',
        //         'comer_lotes.referenciag',
        //         'comer_lotes.noTransferente',
        //         'comer_lotes.description',
        //         'comer_lotes.precioGarantia',
        //     ])
        //     .where({eventId: eventIdIn})
        //     .getRawMany()
        //
        // //Cursor C_LCAN
        // const C_LCAN = await this.tmpLotesComerRepository
        //     .createQueryBuilder('tmp_lotes_comer')
        //     .select([
        //         'tmp_lotes_comer.lotId',
        //         'tmp_lotes_comer.publicLot',
        //     ])
        //     .where({eventId: eventIdIn})
        //     .getRawMany()
        //
        // //Cursor CE
        // const CE = await this.comerEventosRepository
        //     .createQueryBuilder('comer_eventos')
        //     .select([
        //         'comer_eventos.eventId',
        //         'comer_eventos.processCve',
        //         'comer_eventos.eventClosingDate',
        //         'comer_eventos.eventTpId',
        //         'comer_eventos.address',
        //         'comer_eventos.place',
        //         'comer_eventos.',
        //         'comer_eventos.',
        //     ])
        //     .where({eventId: eventIdIn})
        //     .getRawMany()



        return {
            data: A,
            count: A.length
        }
    }
}
