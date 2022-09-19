import { Test, TestingModule } from '@nestjs/testing';
import { QueryFilterEventService } from './query-filter-event.service';

describe('QueryFilterEventService', () => {
  let service: QueryFilterEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueryFilterEventService],
    }).compile();

    service = module.get<QueryFilterEventService>(QueryFilterEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
