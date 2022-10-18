import { Test, TestingModule } from '@nestjs/testing';
import { GetGoodsLabelService } from './get-goods-label.service';

describe('GetGoodsLabelService', () => {
  let service: GetGoodsLabelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetGoodsLabelService],
    }).compile();

    service = module.get<GetGoodsLabelService>(GetGoodsLabelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
