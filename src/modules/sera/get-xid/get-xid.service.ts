import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { LessThan, Repository } from "typeorm";

import { ComerEventsEntity } from "../../entities/comerEvents.entity";

@Injectable()
export class GetXidService {
  constructor(
    @InjectRepository(ComerEventsEntity) private readonly comerEventosEntityRepository: Repository<ComerEventsEntity>,

  ) {}
  async getEvent( eventIdIn: number ) {
    const found = await this.comerEventosEntityRepository
      .createQueryBuilder('comer_eventos')
      .select([
        'comer_eventos.eventTpId',
        'comer_eventos.processCve',
        'comer_eventos.place',
        'comer_eventos.observations',
        'comer_eventos.baseCost',
        'comer_eventos.thirdId',
        'comer_eventos.eventDate',
        'comer_eventos.eventClosingDate',
        'comer_eventos.failureDate',
        'comer_eventos.address',
        'comer_eventos.statusVtaId',
        ])
      .where( {eventId: eventIdIn} )
    return found.getMany();
  }
}
