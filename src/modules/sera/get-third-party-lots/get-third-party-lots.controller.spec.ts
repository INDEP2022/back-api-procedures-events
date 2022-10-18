import { Test, TestingModule } from '@nestjs/testing';
import { GetThirdPartyLotsController } from './get-third-party-lots.controller';

describe('GetThirdPartyLotsController', () => {
  let controller: GetThirdPartyLotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetThirdPartyLotsController],
    }).compile();

    controller = module.get<GetThirdPartyLotsController>(GetThirdPartyLotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
