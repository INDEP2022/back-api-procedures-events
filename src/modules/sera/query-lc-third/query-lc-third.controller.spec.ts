import { Test, TestingModule } from '@nestjs/testing';
import { QueryLcThirdController } from './query-lc-third.controller';

describe('QueryLcThirdController', () => {
  let controller: QueryLcThirdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueryLcThirdController],
    }).compile();

    controller = module.get<QueryLcThirdController>(QueryLcThirdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
