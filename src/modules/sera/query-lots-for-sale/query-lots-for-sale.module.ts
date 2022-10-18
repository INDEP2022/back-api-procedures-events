import { Module } from '@nestjs/common';
import { QueryLotsForSaleService } from './query-lots-for-sale.service';
import { QueryLotsForSaleController } from './query-lots-for-sale.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComerLotsEntity } from "../../entities/comerLots.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ComerLotsEntity]),
  ],
  providers: [QueryLotsForSaleService],
  controllers: [QueryLotsForSaleController]
})
export class QueryLotsForSaleModule {}
