import { Test, TestingModule } from '@nestjs/testing';
import { QueryCurrentEventsService } from './query-current-events.service';

describe('QueryCurrentEventsService', () => {
  let service: QueryCurrentEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueryCurrentEventsService],
    }).compile();

    service = module.get<QueryCurrentEventsService>(QueryCurrentEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
