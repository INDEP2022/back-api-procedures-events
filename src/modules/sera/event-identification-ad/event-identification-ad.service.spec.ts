import { Test, TestingModule } from '@nestjs/testing';
import { EventIdentificationAdService } from './event-identification-ad.service';

describe('EventIdentificationAdService', () => {
  let service: EventIdentificationAdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventIdentificationAdService],
    }).compile();

    service = module.get<EventIdentificationAdService>(EventIdentificationAdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
