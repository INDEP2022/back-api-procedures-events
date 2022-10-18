import { Test, TestingModule } from '@nestjs/testing';
import { GetThirdPartyLotsService } from './get-third-party-lots.service';

describe('GetThirdPartyLotsService', () => {
  let service: GetThirdPartyLotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetThirdPartyLotsService],
    }).compile();

    service = module.get<GetThirdPartyLotsService>(GetThirdPartyLotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
