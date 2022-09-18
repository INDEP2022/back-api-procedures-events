import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { ComerEventosEntity } from "../../entities/comerEventos.entity";

@Injectable()
export class EventIdentificationAdService {
  constructor(
    @InjectRepository(ComerEventosEntity) private readonly comerEventosRepository: Repository<ComerEventosEntity>,

  ) {}
  async getById( eventIdIn: number ) {
    const found = await this.comerEventosRepository
      .createQueryBuilder('comer_eventos')
      .select('comer_eventos.eventTpId', 'id_tpevento')
      .where({ eventId: eventIdIn })
    return found.getRawOne();
  }
}
