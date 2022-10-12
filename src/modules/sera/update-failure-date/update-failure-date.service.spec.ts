import { Test, TestingModule } from '@nestjs/testing';
import { UpdateFailureDateService } from './update-failure-date.service';

describe('UpdateFailureDateService', () => {
  let service: UpdateFailureDateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateFailureDateService],
    }).compile();

    service = module.get<UpdateFailureDateService>(UpdateFailureDateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
