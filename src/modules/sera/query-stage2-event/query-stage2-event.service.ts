import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { ComerEventsEntity } from "../../entities/comerEvents.entity";
import { ComerEventsTprocessEntity } from "../../entities/comerEventsTprocess.entity";
import { Repository } from "typeorm";

@Injectable()
export class QueryStage2EventService {
  constructor(
    @InjectRepository(ComerEventsEntity) private readonly comerEventosRepository: Repository<ComerEventsEntity>,
    @InjectRepository(ComerEventsTprocessEntity) private readonly comerEventosTprocesoRepository: Repository<ComerEventsTprocessEntity>,
  ) {}

  async getStage() {
    const found = await this.comerEventosTprocesoRepository
      .createQueryBuilder('comer_eventos_tproceso')
      .innerJoinAndSelect(ComerEventsEntity, "comer_eventos", "comer_eventos.eventId = comer_eventos_tproceso.eventId")
      .select(
        "comer_eventos.eventId || '-' || comer_eventos.processCve", "EVENTO")
      .addSelect("comer_eventos_tproceso.eventId")
      .orderBy('comer_eventos_tproceso.eventId', 'DESC')
      .where( {stage: 2} )
    return found.getMany();
  }
}

