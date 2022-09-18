import { Test, TestingModule } from '@nestjs/testing';
import { QueryStage2EventController } from './query-stage2-event.controller';

describe('QueryStage2EventController', () => {
  let controller: QueryStage2EventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueryStage2EventController],
    }).compile();

    controller = module.get<QueryStage2EventController>(QueryStage2EventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
