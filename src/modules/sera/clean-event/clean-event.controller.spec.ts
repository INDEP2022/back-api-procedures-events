import { Test, TestingModule } from '@nestjs/testing';
import { CleanEventController } from './clean-event.controller';

describe('CleanEventController', () => {
  let controller: CleanEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CleanEventController],
    }).compile();

    controller = module.get<CleanEventController>(CleanEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
