import { Test, TestingModule } from '@nestjs/testing';
import { GetEventStageService } from './get-event-stage.service';

describe('GetEventStageService', () => {
  let service: GetEventStageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetEventStageService],
    }).compile();

    service = module.get<GetEventStageService>(GetEventStageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
