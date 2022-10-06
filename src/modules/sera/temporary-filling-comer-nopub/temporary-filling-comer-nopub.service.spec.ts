import { Test, TestingModule } from '@nestjs/testing';
import { TemporaryFillingComerNopubService } from './temporary-filling-comer-nopub.service';

describe('TemporaryFillingComerNopubService', () => {
  let service: TemporaryFillingComerNopubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemporaryFillingComerNopubService],
    }).compile();

    service = module.get<TemporaryFillingComerNopubService>(TemporaryFillingComerNopubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
