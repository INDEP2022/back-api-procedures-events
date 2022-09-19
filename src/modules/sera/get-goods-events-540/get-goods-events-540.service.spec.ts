import { Test, TestingModule } from '@nestjs/testing';
import { GetGoodsEvents540Service } from './get-goods-events-540.service';

describe('GetGoodsEvents540Service', () => {
  let service: GetGoodsEvents540Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetGoodsEvents540Service],
    }).compile();

    service = module.get<GetGoodsEvents540Service>(GetGoodsEvents540Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
