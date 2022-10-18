import { Test, TestingModule } from '@nestjs/testing';
import { GetKeyReportTaxService } from './get-key-report-tax.service';

describe('GetKeyReportTaxService', () => {
  let service: GetKeyReportTaxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetKeyReportTaxService],
    }).compile();

    service = module.get<GetKeyReportTaxService>(GetKeyReportTaxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
