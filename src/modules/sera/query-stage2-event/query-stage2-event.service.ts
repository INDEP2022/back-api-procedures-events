import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { ComerEventosEntity } from "../../entities/comerEventos.entity";
import { ComerEventosTprocesoEntity } from "../../entities/comerEventosTproceso.entity";
import { Repository } from "typeorm";

@Injectable()
export class QueryStage2EventService {
  constructor(
    @InjectRepository(ComerEventosEntity) private readonly comerEventosRepository: Repository<ComerEventosEntity>,
    @InjectRepository(ComerEventosTprocesoEntity) private readonly comerEventosTprocesoRepository: Repository<ComerEventosTprocesoEntity>,
  ) {}

  async getStage() {
    const found = await this.comerEventosRepository
      .createQueryBuilder('comer_eventos')
      .innerJoinAndSelect(ComerEventosTprocesoEntity, "comer_eventos_tproceso", "comer_eventos.eventId = comer_eventos_tproceso.eventId")
      .select(
        "comer_eventos.eventId || '-' || comer_eventos.processCve",
        "EVENTO"
      )
      .where( {stage: 2} )
    return found.getMany();
  }
}

