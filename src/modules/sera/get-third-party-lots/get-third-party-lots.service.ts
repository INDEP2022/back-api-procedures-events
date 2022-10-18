import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { IsNull, Not, Repository } from "typeorm";
import { ComerLotsEntity } from "../../entities/comerLots.entity";

@Injectable()
export class GetThirdPartyLotsService {
  constructor(
    @InjectRepository(ComerLotsEntity) private readonly ComerLotsRepository: Repository<ComerLotsEntity>,

  ) {}
  async getThirdLots( lotIdIn: number ) {
    const found = await this.ComerLotsRepository
      .createQueryBuilder('comer_lotes')
      .select([
        "comer_lotes.lotId",
        "comer_lotes.eventId",
        "comer_lotes.description",
        "comer_lotes.finalPrice"
      ])
      .where({lotId:lotIdIn})
      .andWhere( {finalPrice: Not(IsNull())} )
      .getMany();
    return found
  }
}
