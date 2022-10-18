import { Test, TestingModule } from '@nestjs/testing';
import { QueryLotsForSaleController } from './query-lots-for-sale.controller';

describe('QueryLotsForSaleController', () => {
  let controller: QueryLotsForSaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueryLotsForSaleController],
    }).compile();

    controller = module.get<QueryLotsForSaleController>(QueryLotsForSaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
