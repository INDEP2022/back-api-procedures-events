import { Module } from '@nestjs/common';
import { GetInventoryShipGoodService } from './get-inventory-ship-good.service';
import { GetInventoryShipGoodController } from './get-inventory-ship-good.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ssf3InvGoodsShiploadEntity } from "../../entities/Ssf3InvGoodsShipload";

@Module({
  imports: [
    TypeOrmModule.forFeature([Ssf3InvGoodsShiploadEntity]),
  ],
  providers: [GetInventoryShipGoodService],
  controllers: [GetInventoryShipGoodController]
})
export class GetInventoryShipGoodModule {}
