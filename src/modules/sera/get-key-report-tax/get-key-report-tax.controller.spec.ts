import { Test, TestingModule } from '@nestjs/testing';
import { GetKeyReportTaxController } from './get-key-report-tax.controller';

describe('GetKeyReportTaxController', () => {
  let controller: GetKeyReportTaxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetKeyReportTaxController],
    }).compile();

    controller = module.get<GetKeyReportTaxController>(GetKeyReportTaxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
