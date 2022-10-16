import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { ComerEventsEntity } from "../../entities/comerEvents.entity";
import { Repository } from "typeorm";
import { UpdateEventDto } from "./dto/update-event.dto";

@Injectable()
export class UpdateEventService {
  constructor(
    @InjectRepository(ComerEventsEntity) private comerEventosRepository: Repository<ComerEventsEntity>,
  ) {}

  async  putEvent(idUpdate: number, updateEventDto:UpdateEventDto) {
    const grant = await this.comerEventosRepository.findOne({ where: { eventId: idUpdate } });
    if (grant) {
      this.comerEventosRepository.merge(grant, updateEventDto);
      return this.comerEventosRepository.save(grant);
    } else {
      return false;
    }
  }

}
