import { Injectable } from '@nestjs/common';
import { CatLabelGoodEntity } from "../../entities/catLabelGood.entity";
import { Repository } from "typeorm";
import { PaginationDto } from "../../../shared/dto/pagination.dto";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class GetGoodsLabelService {
  constructor(
    @InjectRepository(CatLabelGoodEntity) private readonly catLabelGoodRepository: Repository<CatLabelGoodEntity>,
  ) {}

  async getAll( {inicio, pageSize}: PaginationDto ) {
    const [result, total] = await this.catLabelGoodRepository.findAndCount({
      skip: ( inicio ? inicio - 1 : Number(0) ),
      take: pageSize,
      order: { labelId: 'DESC' }
    });

    return {
      data: result,
      count: total
    }
  }
}
