import { Test, TestingModule } from '@nestjs/testing';
import { GetAuctionDataController } from './get-auction-data.controller';

describe('GetAuctionDataController', () => {
  let controller: GetAuctionDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAuctionDataController],
    }).compile();

    controller = module.get<GetAuctionDataController>(GetAuctionDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
