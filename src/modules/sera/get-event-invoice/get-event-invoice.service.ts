import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ComerEventosEntity} from "../../entities/comerEventos.entity";
import {Repository} from "typeorm";
import {ComerDetBillEntity} from "../../entities/comerDetBill.entity";
import {ComerLotesEntity} from "../../entities/comerLotes.entity";

@Injectable()
export class GetEventInvoiceService {
    constructor(
        @InjectRepository(ComerEventosEntity) private readonly comerEventosRepository: Repository<ComerEventosEntity>,
        @InjectRepository(ComerDetBillEntity) private readonly comerDetBillRepository: Repository<ComerDetBillEntity>,
        @InjectRepository(ComerLotesEntity) private readonly comerLotesRepository: Repository<ComerLotesEntity>,
    ) {}
    async getEventInvoice( eventIdIn: number, billIdIn: number ) {
        const DIR = await this.comerEventosRepository
            .createQueryBuilder('comer_eventos')
            .select([
                "DIRECCION",
            ])
            .where( {eventId: eventIdIn} )
            .getRawMany()

        if (DIR[0] == "A" || DIR[0] == "M" )
        {
            const v_VALIDACION = await this.comerEventosRepository
                .createQueryBuilder('comer_detfacturas')
                .innerJoin(ComerLotesEntity, "comer_lotes",
                    "comer_detfacturas.ID_EVENTO = comer_lotes.ID_EVENTO" +
                            "comer_detfacturas.ID_LOTE = comer_lotes.LOTE_PUBLICO")
                .select([
                    "COUNT(0)",
                ])
                .where( {eventId: eventIdIn})
                .andWhere({billId: billIdIn})
                .getRawMany()
        }
        else
        {



        }
        return DIR;
    }
}
