import { Test, TestingModule } from '@nestjs/testing';
import { OngoingEventsService } from './ongoing-events.service';

describe('OngoingEventsService', () => {
  let service: OngoingEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OngoingEventsService],
    }).compile();

    service = module.get<OngoingEventsService>(OngoingEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
