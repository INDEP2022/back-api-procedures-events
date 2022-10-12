import { Test, TestingModule } from '@nestjs/testing';
import { TotalUserEventsService } from './total-user-events.service';

describe('TotalUserEventsService', () => {
  let service: TotalUserEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TotalUserEventsService],
    }).compile();

    service = module.get<TotalUserEventsService>(TotalUserEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
