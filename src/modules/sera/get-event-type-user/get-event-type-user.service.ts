import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { ComerTpeventsEntity } from "../../entities/comerTpevents.entity";
import { ComerUsuxtpeventsEntity } from "../../entities/comerUsuxtpevents.entity";

@Injectable()
export class GetEventTypeUserService {
  constructor(
    @InjectRepository(ComerUsuxtpeventsEntity) private readonly comerUsuautxeventoRepository: Repository<ComerUsuxtpeventsEntity>,
    @InjectRepository(ComerTpeventsEntity) private readonly comerTpeventosRepository: Repository<ComerTpeventsEntity>,

  ) {}
  async getUser( userIn: string ) {
    const found = await this.comerUsuautxeventoRepository
      .createQueryBuilder('comer_usuautxevento')
      .innerJoinAndSelect(ComerTpeventsEntity, "comer_tpeventos", "comer_tpeventos.eventTpId = comer_usuautxevento.eventTpId")
      .select([
        'comer_usuautxevento.eventTpId',
        'comer_tpeventos.description',
        'comer_usuautxevento.user',
      ])
      .where( {user: userIn} )
    return found.getMany();
  }
}
