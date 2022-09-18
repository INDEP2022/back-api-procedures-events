import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { LessThan, Repository } from "typeorm";
import { ComerEventosTprocesoEntity } from "../../entities/comerEventosTproceso.entity";

@Injectable()
export class GetEventStageService {
  constructor(
    @InjectRepository(ComerEventosTprocesoEntity) private readonly comerEventosTprocesoRepository: Repository<ComerEventosTprocesoEntity>,

  ) {}
  async getById( eventIdIn: number ) {
    const found = await this.comerEventosTprocesoRepository
      .createQueryBuilder('comer_eventos_tproceso')
      .select('comer_eventos_tproceso.stage', 'fase')
      .where({ eventId: eventIdIn })
      return found.getRawOne();
  }
}
