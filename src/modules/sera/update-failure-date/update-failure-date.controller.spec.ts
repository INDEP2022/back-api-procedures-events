import { Test, TestingModule } from '@nestjs/testing';
import { UpdateFailureDateController } from './update-failure-date.controller';

describe('UpdateFailureDateController', () => {
  let controller: UpdateFailureDateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateFailureDateController],
    }).compile();

    controller = module.get<UpdateFailureDateController>(UpdateFailureDateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
