import { Test, TestingModule } from '@nestjs/testing';
import { MaxNumberController } from './max-number.controller';

describe('MaxNumberController', () => {
  let controller: MaxNumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaxNumberController],
    }).compile();

    controller = module.get<MaxNumberController>(MaxNumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
