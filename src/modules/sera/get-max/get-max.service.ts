import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { LessThan, Repository} from "typeorm";
import { ComerEventsEntity } from "../../entities/comerEvents.entity";

@Injectable()
export class GetMaxService {
  constructor(
    @InjectRepository(ComerEventsEntity) private readonly comerEventosRepository: Repository<ComerEventsEntity>,
  ) {}

  async getMax() {
    const found = await this.comerEventosRepository
      .createQueryBuilder("comer_eventos")
      .select("MAX(comer_eventos.eventId)", "idMaxTotal")
      .where({
        eventId: LessThan(9999999),
      })
        .getRawOne();
    return found
  }
}