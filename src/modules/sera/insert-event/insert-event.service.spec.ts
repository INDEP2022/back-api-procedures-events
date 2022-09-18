import { Test, TestingModule } from '@nestjs/testing';
import { InsertEventService } from './insert-event.service';

describe('InsertEventService', () => {
  let service: InsertEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsertEventService],
    }).compile();

    service = module.get<InsertEventService>(InsertEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
