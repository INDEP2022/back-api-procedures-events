import { Test, TestingModule } from '@nestjs/testing';
import { QueryCurrentEventsController } from './query-current-events.controller';

describe('QueryCurrentEventsController', () => {
  let controller: QueryCurrentEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueryCurrentEventsController],
    }).compile();

    controller = module.get<QueryCurrentEventsController>(QueryCurrentEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
