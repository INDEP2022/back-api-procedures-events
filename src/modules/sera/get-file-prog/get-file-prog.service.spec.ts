import { Test, TestingModule } from '@nestjs/testing';
import { GetFileProgService } from './get-file-prog.service';

describe('GetFileProgService', () => {
  let service: GetFileProgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetFileProgService],
    }).compile();

    service = module.get<GetFileProgService>(GetFileProgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
