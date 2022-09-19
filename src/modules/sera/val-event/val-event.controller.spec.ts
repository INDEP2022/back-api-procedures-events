import { Test, TestingModule } from '@nestjs/testing';
import { ValEventController } from './val-event.controller';

describe('ValEventController', () => {
  let controller: ValEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValEventController],
    }).compile();

    controller = module.get<ValEventController>(ValEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
