import { Module } from '@nestjs/common';
import { GetGoodsLabelService } from './get-goods-label.service';
import { GetGoodsLabelController } from './get-goods-label.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatLabelGoodEntity } from "../../entities/catLabelGood.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([CatLabelGoodEntity]),
  ],
  providers: [GetGoodsLabelService],
  controllers: [GetGoodsLabelController]
})
export class GetGoodsLabelModule {}
