import { Test, TestingModule } from '@nestjs/testing';
import { GetFilterEventService } from './get-filter-event.service';

describe('GetFilterEventService', () => {
  let service: GetFilterEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetFilterEventService],
    }).compile();

    service = module.get<GetFilterEventService>(GetFilterEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
