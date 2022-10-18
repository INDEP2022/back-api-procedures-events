import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Ssf3CatBeneficiarySpEntity } from "../../entities/ssf3CatBeneficiarySp.entity";
import { Repository } from "typeorm";
import { PaginationDto } from "../../../shared/dto/pagination.dto";

@Injectable()
export class GetBeneficiarySpService {
  constructor(
    @InjectRepository(Ssf3CatBeneficiarySpEntity) private readonly ssf3CatBeneficiarioSpRepository: Repository<Ssf3CatBeneficiarySpEntity>,
  ) {}

  async getAll( {inicio, pageSize}: PaginationDto ) {
    const [result, total] = await this.ssf3CatBeneficiarioSpRepository.findAndCount({
      skip: ( inicio ? inicio - 1 : Number(0) ),
      take: pageSize,
      order: { beneficiaryId: 'DESC' }
    });

    return {
      data: result,
      count: total
    }
  }
}
