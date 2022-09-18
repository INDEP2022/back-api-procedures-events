import { Test, TestingModule } from '@nestjs/testing';
import { QueryStage2EventService } from './query-stage2-event.service';

describe('QueryStage2EventService', () => {
  let service: QueryStage2EventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueryStage2EventService],
    }).compile();

    service = module.get<QueryStage2EventService>(QueryStage2EventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
