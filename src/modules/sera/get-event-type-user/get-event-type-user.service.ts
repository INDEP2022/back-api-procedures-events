import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { ComerTpeventosEntity } from "../../entities/comerTpeventos.entity";
import { ComerUsuxtpeventosEntity } from "../../entities/comerUsuxtpeventos.entity";

@Injectable()
export class GetEventTypeUserService {
  constructor(
    @InjectRepository(ComerUsuxtpeventosEntity) private readonly comerUsuautxeventoRepository: Repository<ComerUsuxtpeventosEntity>,
    @InjectRepository(ComerTpeventosEntity) private readonly comerTpeventosRepository: Repository<ComerTpeventosEntity>,

  ) {}
  async getUser( userIn: string ) {
    const found = await this.comerUsuautxeventoRepository
      .createQueryBuilder('comer_usuautxevento')
      .innerJoinAndSelect(ComerTpeventosEntity, "comer_tpeventos", "comer_tpeventos.eventTpId = comer_usuautxevento.eventTpId")
      .select([
        'comer_usuautxevento.eventTpId',
        'comer_tpeventos.description',
        'comer_usuautxevento.user',
      ])
      .where( {user: userIn} )
    return found.getMany();
  }
}
