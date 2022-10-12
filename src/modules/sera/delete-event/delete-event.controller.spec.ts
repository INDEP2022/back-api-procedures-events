import { Test, TestingModule } from '@nestjs/testing';
import { DeleteEventController } from './delete-event.controller';

describe('DeleteEventController', () => {
  let controller: DeleteEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteEventController],
    }).compile();

    controller = module.get<DeleteEventController>(DeleteEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
