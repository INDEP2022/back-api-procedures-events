import { Test, TestingModule } from '@nestjs/testing';
import { GetEventLpSpService } from './get-event-lp-sp.service';

describe('GetEventLpSpService', () => {
  let service: GetEventLpSpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetEventLpSpService],
    }).compile();

    service = module.get<GetEventLpSpService>(GetEventLpSpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
