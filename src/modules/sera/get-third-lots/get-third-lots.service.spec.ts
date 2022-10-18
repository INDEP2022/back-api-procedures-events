import { Test, TestingModule } from '@nestjs/testing';
import { GetThirdLotsService } from './get-third-lots.service';

describe('GetThirdLotsService', () => {
  let service: GetThirdLotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetThirdLotsService],
    }).compile();

    service = module.get<GetThirdLotsService>(GetThirdLotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
