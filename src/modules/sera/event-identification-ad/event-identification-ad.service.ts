import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { ComerEventsEntity } from "../../entities/comerEvents.entity";

@Injectable()
export class EventIdentificationAdService {
  constructor(
    @InjectRepository(ComerEventsEntity) private readonly comerEventosRepository: Repository<ComerEventsEntity>,

  ) {}
  async getById( eventIdIn: number ) {
    const found = await this.comerEventosRepository
      .createQueryBuilder('comer_eventos')
      .select('comer_eventos.eventTpId', 'id_tpevento')
      .where({ eventId: eventIdIn })
    return found.getRawOne();
  }
}
