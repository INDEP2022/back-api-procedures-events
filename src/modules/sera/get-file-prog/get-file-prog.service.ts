import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ActsDeliveryReceptionEntity } from "../../entities/actsDeliveryReception.entity";

@Injectable()
export class GetFileProgService {
  constructor(
    @InjectRepository(ActsDeliveryReceptionEntity) private readonly actsDeliveryReceptionRepository: Repository<ActsDeliveryReceptionEntity>,
  ) {}

  async getById( certificateIdIn: number ) {
    const found = await this.actsDeliveryReceptionRepository
      .createQueryBuilder()
      .where({ certificateId: certificateIdIn })
      .getMany()

    const pResults = found.map((element) => {
        return {
          certificateId: element.certificateId,
          fileId: element.fileId,
        }
      }
    )

    return {
      data: pResults,
      count: pResults.length
    }
  }

}
