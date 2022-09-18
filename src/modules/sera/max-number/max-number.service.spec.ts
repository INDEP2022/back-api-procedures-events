import { Test, TestingModule } from '@nestjs/testing';
import { MaxNumberService } from './max-number.service';

describe('MaxNumberService', () => {
  let service: MaxNumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaxNumberService],
    }).compile();

    service = module.get<MaxNumberService>(MaxNumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
