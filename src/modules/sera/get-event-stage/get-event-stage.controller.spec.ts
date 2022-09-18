import { Test, TestingModule } from '@nestjs/testing';
import { GetEventStageController } from './get-event-stage.controller';

describe('GetEventStageController', () => {
  let controller: GetEventStageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetEventStageController],
    }).compile();

    controller = module.get<GetEventStageController>(GetEventStageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
