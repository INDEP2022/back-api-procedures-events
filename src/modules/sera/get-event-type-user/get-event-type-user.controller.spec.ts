import { Test, TestingModule } from '@nestjs/testing';
import { GetEventTypeUserController } from './get-event-type-user.controller';

describe('GetEventTypeUserController', () => {
  let controller: GetEventTypeUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetEventTypeUserController],
    }).compile();

    controller = module.get<GetEventTypeUserController>(GetEventTypeUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
