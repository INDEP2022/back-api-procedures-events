import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { LessThan, Repository } from "typeorm";

import { ComerEventosEntity } from "../../entities/comerEventos.entity";

@Injectable()
export class GetMaxService {
  constructor(
    @InjectRepository(ComerEventosEntity) private readonly comerEventosRepository: Repository<ComerEventosEntity>,
  ) {}

  async getMax() {
    const found = this.comerEventosRepository
      .createQueryBuilder("comer_eventos")
      .select("MAX(comer_eventos.eventId)", "idMaxTotal")
      .where({
        eventId: LessThan(9999999),
      })
    return found.getRawOne();
  }
}
