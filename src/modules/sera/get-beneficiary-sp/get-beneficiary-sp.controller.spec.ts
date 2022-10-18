import { Test, TestingModule } from '@nestjs/testing';
import { GetBeneficiarySpController } from './get-beneficiary-sp.controller';

describe('GetBeneficiarySpController', () => {
  let controller: GetBeneficiarySpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetBeneficiarySpController],
    }).compile();

    controller = module.get<GetBeneficiarySpController>(GetBeneficiarySpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
