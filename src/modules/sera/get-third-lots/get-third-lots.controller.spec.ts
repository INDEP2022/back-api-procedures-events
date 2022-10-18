import { Test, TestingModule } from '@nestjs/testing';
import { GetThirdLotsController } from './get-third-lots.controller';

describe('GetThirdLotsController', () => {
  let controller: GetThirdLotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetThirdLotsController],
    }).compile();

    controller = module.get<GetThirdLotsController>(GetThirdLotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
