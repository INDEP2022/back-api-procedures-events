import { Test, TestingModule } from '@nestjs/testing';
import { QueryLcThirdService } from './query-lc-third.service';

describe('QueryLcThirdService', () => {
  let service: QueryLcThirdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueryLcThirdService],
    }).compile();

    service = module.get<QueryLcThirdService>(QueryLcThirdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
