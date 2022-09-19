import { Test, TestingModule } from '@nestjs/testing';
import { GetAuctionDataService } from './get-auction-data.service';

describe('GetAuctionDataService', () => {
  let service: GetAuctionDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAuctionDataService],
    }).compile();

    service = module.get<GetAuctionDataService>(GetAuctionDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
