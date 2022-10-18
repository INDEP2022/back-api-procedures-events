import { Test, TestingModule } from '@nestjs/testing';
import { QueryLotsForSaleService } from './query-lots-for-sale.service';

describe('QueryLotsForSaleService', () => {
  let service: QueryLotsForSaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueryLotsForSaleService],
    }).compile();

    service = module.get<QueryLotsForSaleService>(QueryLotsForSaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
