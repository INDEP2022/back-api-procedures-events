import { Test, TestingModule } from '@nestjs/testing';
import { GetMaxController } from './get-max.controller';

describe('GetMaxController', () => {
  let controller: GetMaxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetMaxController],
    }).compile();

    controller = module.get<GetMaxController>(GetMaxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
