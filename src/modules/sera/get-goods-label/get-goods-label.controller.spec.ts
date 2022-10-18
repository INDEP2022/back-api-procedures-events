import { Test, TestingModule } from '@nestjs/testing';
import { GetGoodsLabelController } from './get-goods-label.controller';

describe('GetGoodsLabelController', () => {
  let controller: GetGoodsLabelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetGoodsLabelController],
    }).compile();

    controller = module.get<GetGoodsLabelController>(GetGoodsLabelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
