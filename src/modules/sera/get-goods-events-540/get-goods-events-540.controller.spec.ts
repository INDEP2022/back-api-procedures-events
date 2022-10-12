import { Test, TestingModule } from '@nestjs/testing';
import { GetGoodsEvents540Controller } from './get-goods-events-540.controller';

describe('GetGoodsEvents540Controller', () => {
  let controller: GetGoodsEvents540Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetGoodsEvents540Controller],
    }).compile();

    controller = module.get<GetGoodsEvents540Controller>(GetGoodsEvents540Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
