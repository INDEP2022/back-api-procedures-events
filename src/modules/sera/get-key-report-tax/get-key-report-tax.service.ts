import { Injectable } from '@nestjs/common';
import { StrategyRepImplementationEntity } from "../../entities/StrategyRepImplementation.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class GetKeyReportTaxService {
  constructor(
    @InjectRepository(StrategyRepImplementationEntity) private readonly strategyRepImplementationRepository: Repository<StrategyRepImplementationEntity>,

  ) {}
  async getById( pReportIdIn: number ) {
    const found = await this.strategyRepImplementationRepository
      .createQueryBuilder()
      .where( {reportId : pReportIdIn} )
      .getMany()

    const pResults = found.map((element) => {
        return {
          reportCve: element.reportCve,
        }
      }
    )

    return {
      data: pResults,
      count: pResults.length
    }
  }
}
