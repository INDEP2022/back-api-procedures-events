import { Test, TestingModule } from '@nestjs/testing';
import { CleanEventService } from './clean-event.service';

describe('CleanEventService', () => {
  let service: CleanEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CleanEventService],
    }).compile();

    service = module.get<CleanEventService>(CleanEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
