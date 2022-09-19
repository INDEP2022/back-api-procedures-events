import { Test, TestingModule } from '@nestjs/testing';
import { GetEventLpSpController } from './get-event-lp-sp.controller';

describe('GetEventLpSpController', () => {
  let controller: GetEventLpSpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetEventLpSpController],
    }).compile();

    controller = module.get<GetEventLpSpController>(GetEventLpSpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
