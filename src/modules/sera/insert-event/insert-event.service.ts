import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ComerEventosEntity } from "../../entities/comerEventos.entity";
import { InsertEventDto } from "./dto/insert-event.dto";

@Injectable()
export class InsertEventService {
  constructor(
    @InjectRepository(ComerEventosEntity) private comerEventosRepository: Repository<ComerEventosEntity>,
  ) {}

  async createEvent( insertEventDto: InsertEventDto ) {
    const eventCreated = await this.comerEventosRepository.save( insertEventDto );
    return eventCreated;
  }
}
