import { Test, TestingModule } from '@nestjs/testing';
import { QueryGeneralEventsService } from './query-general-events.service';

describe('QueryGeneralEventsService', () => {
  let service: QueryGeneralEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueryGeneralEventsService],
    }).compile();

    service = module.get<QueryGeneralEventsService>(QueryGeneralEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
