import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { ComerEventsEntity } from "../../entities/comerEvents.entity";
import { IsNull, LessThan, Not, Repository } from "typeorm";

@Injectable()
export class QueryGeneralEventsService {
  constructor(
    @InjectRepository(ComerEventsEntity) private readonly comerEventsRepository: Repository<ComerEventsEntity>,
  ) {}

  async getGeneralEvents() {
    const found = await this.comerEventsRepository
      .createQueryBuilder("comer_eventos")
      .select([
        'comer_eventos.eventId',
        'comer_eventos.statusVtaId',
        'comer_eventos.processCve',
        'comer_eventos.observations',
        'comer_eventos.eventTpId'
      ])
      .where({eventId:7})
      .andWhere("" +
        "(" +
        "comer_eventos.eventTpId = :eventTpId1 OR " +
        "comer_eventos.eventTpId = :eventTpId2 OR " +
        "comer_eventos.eventTpId = :eventTpId3 OR " +
        "comer_eventos.eventTpId = :eventTpId4 OR " +
        "comer_eventos.eventTpId = :eventTpId11)")
      .setParameters({
        eventTpId1: 1,
        eventTpId2: 2,
        eventTpId3: 3,
        eventTpId4: 4,
        eventTpId5: 11
      })
      .orderBy("comer_eventos.eventId")
      .getMany();
    return found
  }
}
