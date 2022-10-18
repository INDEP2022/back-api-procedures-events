import { Module } from '@nestjs/common';
import { GetKeyReportTaxService } from './get-key-report-tax.service';
import { GetKeyReportTaxController } from './get-key-report-tax.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { StrategyRepImplementationEntity } from "../../entities/StrategyRepImplementation.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([StrategyRepImplementationEntity]),
  ],
  providers: [GetKeyReportTaxService],
  controllers: [GetKeyReportTaxController]
})
export class GetKeyReportTaxModule {}
