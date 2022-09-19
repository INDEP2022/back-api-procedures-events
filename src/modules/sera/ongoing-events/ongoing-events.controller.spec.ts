import { Test, TestingModule } from '@nestjs/testing';
import { OngoingEventsController } from './ongoing-events.controller';

describe('OngoingEventsController', () => {
  let controller: OngoingEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OngoingEventsController],
    }).compile();

    controller = module.get<OngoingEventsController>(OngoingEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
