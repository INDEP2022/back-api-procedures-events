import { Test, TestingModule } from '@nestjs/testing';
import { GetXidService } from './get-xid.service';

describe('GetXidService', () => {
  let service: GetXidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetXidService],
    }).compile();

    service = module.get<GetXidService>(GetXidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
