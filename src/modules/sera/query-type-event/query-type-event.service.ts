import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { ComerTpeventsEntity } from "../../entities/comerTpevents.entity";

@Injectable()
export class QueryTypeEventService {
  constructor(
    @InjectRepository(ComerTpeventsEntity) private readonly comerTpeventosRepository: Repository<ComerTpeventsEntity>,

  ) {}
  async getEvent() {
    const found = await this.comerTpeventosRepository
      .createQueryBuilder('comer_tpeventos')
      .select([
          'comer_tpeventos.eventTpId',
          'comer_tpeventos.description',
        ])
      .orderBy('comer_tpeventos.description', 'ASC')
    return found.getMany();
  }
}
