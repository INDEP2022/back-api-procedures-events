import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { LessThan, Repository } from "typeorm";

import { ComerEventsEntity } from "../../entities/comerEvents.entity";

@Injectable()
export class MaxNumberService {
  constructor(
    @InjectRepository(ComerEventsEntity) private readonly comerEventosRepository: Repository<ComerEventsEntity>,
  ) {}

  async getMax() {
    const found = this.comerEventosRepository
      .createQueryBuilder("comer_eventos")
      .select("MAX(comer_eventos.eventId)")
      .where({
        eventId: LessThan(9999999),
      })
    return found.getRawOne();
  }
}
