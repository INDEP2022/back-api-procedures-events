import { Test, TestingModule } from '@nestjs/testing';
import { GetXidController } from './get-xid.controller';

describe('GetXidController', () => {
  let controller: GetXidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetXidController],
    }).compile();

    controller = module.get<GetXidController>(GetXidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
