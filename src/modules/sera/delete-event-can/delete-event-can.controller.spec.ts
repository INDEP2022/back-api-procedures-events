import { Test, TestingModule } from '@nestjs/testing';
import { DeleteEventCanController } from './delete-event-can.controller';

describe('DeleteEventCanController', () => {
  let controller: DeleteEventCanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteEventCanController],
    }).compile();

    controller = module.get<DeleteEventCanController>(DeleteEventCanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
