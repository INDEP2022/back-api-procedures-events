import { Test, TestingModule } from '@nestjs/testing';
import { GetMaxService } from './get-max.service';

describe('GetMaxService', () => {
  let service: GetMaxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetMaxService],
    }).compile();

    service = module.get<GetMaxService>(GetMaxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
