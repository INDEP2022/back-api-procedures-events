import { Test, TestingModule } from '@nestjs/testing';
import { QueryTypeEventService } from './query-type-event.service';

describe('QueryTypeEventService', () => {
  let service: QueryTypeEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueryTypeEventService],
    }).compile();

    service = module.get<QueryTypeEventService>(QueryTypeEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
