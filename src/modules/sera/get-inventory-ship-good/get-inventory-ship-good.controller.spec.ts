import { Test, TestingModule } from '@nestjs/testing';
import { GetInventoryShipGoodController } from './get-inventory-ship-good.controller';

describe('GetInventoryShipGoodController', () => {
  let controller: GetInventoryShipGoodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetInventoryShipGoodController],
    }).compile();

    controller = module.get<GetInventoryShipGoodController>(GetInventoryShipGoodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
