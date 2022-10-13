import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ComerEventosEntity} from "../../entities/comerEventos.entity";
import {IsNull, Not, Repository} from "typeorm";
import {ComerLotesEntity} from "../../entities/comerLotes.entity";

@Injectable()
export class GetLotsOrThirdlotsService {
    constructor(
        @InjectRepository(ComerLotesEntity) private readonly comerLotesRepository: Repository<ComerLotesEntity>,

    ) {}
    async getLotOrThird( eventIdIn: number ) {
        const found = await this.comerLotesRepository
            .createQueryBuilder('comer_lotes')
            .select([
                "ID_LOTE",
                "ID_EVENTO",
                "DESCRIPCION",
                "PRECIO_FINAL"
            ])
            .where( {finalPrice:  Not(IsNull())} )
        return found.getMany();
    }
}
