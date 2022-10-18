import { Injectable } from '@nestjs/common';
import { Ssf3InvGoodsShiploadEntity } from "../../entities/Ssf3InvGoodsShipload";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class GetInventoryShipGoodService {
  constructor(
    @InjectRepository(Ssf3InvGoodsShiploadEntity) private readonly ssf3InvGoodsShiploadRepository: Repository<Ssf3InvGoodsShiploadEntity>,

  ) {}
  async getById( pGoodsIdIn: number ) {
    const found = await this.ssf3InvGoodsShiploadRepository
      .createQueryBuilder()
      .where( {goodsId : pGoodsIdIn} )
      .getMany()

    const pResults = found.map((element) => {
        return {
          pmId: element.pmId,
          brand: element.brand,
          concept: element.concept,
          feature: element.feature,
        }
      }
    )

    return {
      data: pResults,
      count: pResults.length
    }
  }
}
