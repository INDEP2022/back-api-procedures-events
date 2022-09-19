import { Test, TestingModule } from '@nestjs/testing';
import { ValEventService } from './val-event.service';

describe('ValEventService', () => {
  let service: ValEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValEventService],
    }).compile();

    service = module.get<ValEventService>(ValEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
