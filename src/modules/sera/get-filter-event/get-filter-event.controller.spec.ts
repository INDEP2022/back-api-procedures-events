import { Test, TestingModule } from '@nestjs/testing';
import { GetFilterEventController } from './get-filter-event.controller';

describe('GetFilterEventController', () => {
  let controller: GetFilterEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetFilterEventController],
    }).compile();

    controller = module.get<GetFilterEventController>(GetFilterEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
