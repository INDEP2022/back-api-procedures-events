import { Test, TestingModule } from '@nestjs/testing';
import { QueryFilterEventController } from './query-filter-event.controller';

describe('QueryFilterEventController', () => {
  let controller: QueryFilterEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueryFilterEventController],
    }).compile();

    controller = module.get<QueryFilterEventController>(QueryFilterEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
