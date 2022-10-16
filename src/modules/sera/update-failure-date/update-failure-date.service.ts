import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { ComerEventsEntity } from "../../entities/comerEvents.entity";
import { Repository } from "typeorm";
import { UpdateFailureDateDto } from "./dto/update-failure-date.dto";


@Injectable()
export class UpdateFailureDateService {
  constructor(
    @InjectRepository(ComerEventsEntity) private comerEventosRepository: Repository<ComerEventsEntity>,
  ) {
  }

  async putDate(idUpdate: number, updateFailureDateDto: UpdateFailureDateDto) {
    const found = await this.comerEventosRepository
      .createQueryBuilder("comer_eventos")
      .update(ComerEventsEntity)
      .set({failureDate:updateFailureDateDto.failureDate})
      .where("eventId = :eventId", { eventId: idUpdate })
    return found.execute();
  }
}