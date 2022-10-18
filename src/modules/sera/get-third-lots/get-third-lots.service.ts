import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { ComerLotsEntity } from "../../entities/comerLots.entity";
import { IsNull, Not, Repository } from "typeorm";

@Injectable()
export class GetThirdLotsService {
  constructor(
    @InjectRepository(ComerLotsEntity) private readonly ComerLotsRepository: Repository<ComerLotsEntity>,

  ) {}
  async getLots( eventIddIn: number ) {
    const found = await this.ComerLotsRepository
      .createQueryBuilder('comer_lotes')
      .select([
        'comer_lotes.lotId',
        'comer_lotes.statusId',
        'comer_lotes.eventId',
        'comer_lotes.description',
        'comer_lotes.finalPrice',
        'comer_lotes.customerId'
      ])
      .where({eventId:eventIddIn})
      .andWhere( {finalPrice: Not(IsNull())})
      .andWhere( {customerId: Not(IsNull())})
      .andWhere("(comer_lotes.statusId = :statusIdVEN OR comer_lotes.statusId = :statusIdPREP OR comer_lotes.statusId = :statusIdAPRO)")
      .setParameters({ statusIdVEN: "VEN", statusIdPREP: "PREP", statusIdAPRO:"APRO"})
      .orderBy("comer_lotes.lotId")
      .getMany();
    return found
  }
}

