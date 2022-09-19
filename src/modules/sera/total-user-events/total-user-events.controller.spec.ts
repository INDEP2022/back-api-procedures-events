import { Test, TestingModule } from '@nestjs/testing';
import { TotalUserEventsController } from './total-user-events.controller';

describe('TotalUserEventsController', () => {
  let controller: TotalUserEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TotalUserEventsController],
    }).compile();

    controller = module.get<TotalUserEventsController>(TotalUserEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
