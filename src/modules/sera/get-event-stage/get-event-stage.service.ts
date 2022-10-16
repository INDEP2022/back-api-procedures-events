import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ComerEventsTprocessEntity } from "../../entities/comerEventsTprocess.entity";

@Injectable()
export class GetEventStageService {
  constructor(
    @InjectRepository(ComerEventsTprocessEntity) private readonly comerEventosTprocesoRepository: Repository<ComerEventsTprocessEntity>,

  ) {}
  async getById( eventIdIn: number ) {
    const found = await this.comerEventosTprocesoRepository
      .createQueryBuilder('comer_eventos_tproceso')
      .select('comer_eventos_tproceso.stage', 'fase')
      .where({ eventId: eventIdIn })
      return found.getRawOne();
  }
}
