import { Test, TestingModule } from '@nestjs/testing';
import { InsertEventController } from './insert-event.controller';

describe('InsertEventController', () => {
  let controller: InsertEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsertEventController],
    }).compile();

    controller = module.get<InsertEventController>(InsertEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
