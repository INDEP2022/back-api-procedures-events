import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { ComerEventosEntity } from "../../entities/comerEventos.entity";
import { Repository } from "typeorm";
import { UpdateFailureDateDto } from "./dto/update-failure-date.dto";


@Injectable()
export class UpdateFailureDateService {
  constructor(
    @InjectRepository(ComerEventosEntity) private comerEventosRepository: Repository<ComerEventosEntity>,
  ) {
  }

  async putDate(idUpdate: number, updateFailureDateDto: UpdateFailureDateDto) {
    const found = await this.comerEventosRepository
      .createQueryBuilder("comer_eventos")
      .update(ComerEventosEntity)
      .set({failureDate:updateFailureDateDto.failureDate})
      .where("eventId = :eventId", { eventId: idUpdate })
    return found.execute();
  }
}