import { Test, TestingModule } from '@nestjs/testing';
import { GetEventTypeUserService } from './get-event-type-user.service';

describe('GetEventTypeUserService', () => {
  let service: GetEventTypeUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetEventTypeUserService],
    }).compile();

    service = module.get<GetEventTypeUserService>(GetEventTypeUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
