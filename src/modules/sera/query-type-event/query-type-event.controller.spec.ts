import { Test, TestingModule } from '@nestjs/testing';
import { QueryTypeEventController } from './query-type-event.controller';

describe('QueryTypeEventController', () => {
  let controller: QueryTypeEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueryTypeEventController],
    }).compile();

    controller = module.get<QueryTypeEventController>(QueryTypeEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
