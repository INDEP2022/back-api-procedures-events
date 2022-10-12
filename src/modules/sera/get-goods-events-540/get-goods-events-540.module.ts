import { Module } from '@nestjs/common';
import { GetGoodsEvents540Service } from './get-goods-events-540.service';
import { GetGoodsEvents540Controller } from './get-goods-events-540.controller';

@Module({
  providers: [GetGoodsEvents540Service],
  controllers: [GetGoodsEvents540Controller]
})
export class GetGoodsEvents540Module {}
