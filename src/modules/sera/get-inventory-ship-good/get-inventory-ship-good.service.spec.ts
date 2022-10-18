import { Test, TestingModule } from '@nestjs/testing';
import { GetInventoryShipGoodService } from './get-inventory-ship-good.service';

describe('GetInventoryShipGoodService', () => {
  let service: GetInventoryShipGoodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetInventoryShipGoodService],
    }).compile();

    service = module.get<GetInventoryShipGoodService>(GetInventoryShipGoodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
