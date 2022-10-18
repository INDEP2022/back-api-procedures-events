import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { ComerLotsEntity } from "../../entities/comerLots.entity";
import { IsNull, Not, Repository } from "typeorm";

@Injectable()
export class QueryLotsForSaleService {
  constructor(
    @InjectRepository(ComerLotsEntity) private readonly ComerLotsRepository: Repository<ComerLotsEntity>,

  ) {}
  async getLotsSale(customerIdIn: number) {
    const found = await this.ComerLotsRepository
      .createQueryBuilder('comer_lotes')
      .select([
        'comer_lotes.lotId',
        'comer_lotes.eventId',
        'comer_lotes.description',
        'comer_lotes.finalPrice',
        'comer_lotes.publicLot',
        'comer_lotes.customerId'
      ])
      .where({customerId:customerIdIn})
      .andWhere({statusId:'VEN'})
      .andWhere( {finalPrice: Not(IsNull())})
      .orderBy("comer_lotes.lotId")
      .getMany();
    return found
  }
}

