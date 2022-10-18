import { Test, TestingModule } from '@nestjs/testing';
import { GetBeneficiarySpService } from './get-beneficiary-sp.service';

describe('GetBeneficiarySpService', () => {
  let service: GetBeneficiarySpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetBeneficiarySpService],
    }).compile();

    service = module.get<GetBeneficiarySpService>(GetBeneficiarySpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
