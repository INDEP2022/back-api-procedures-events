import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { ComerTpeventosEntity } from "../../entities/comerTpeventos.entity";

@Injectable()
export class QueryTypeEventService {
  constructor(
    @InjectRepository(ComerTpeventosEntity) private readonly comerTpeventosRepository: Repository<ComerTpeventosEntity>,

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
