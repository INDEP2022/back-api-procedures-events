import { Test, TestingModule } from '@nestjs/testing';
import { QueryGeneralEventsController } from './query-general-events.controller';

describe('QueryGeneralEventsController', () => {
  let controller: QueryGeneralEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueryGeneralEventsController],
    }).compile();

    controller = module.get<QueryGeneralEventsController>(QueryGeneralEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
