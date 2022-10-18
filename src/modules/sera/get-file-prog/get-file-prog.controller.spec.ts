import { Test, TestingModule } from '@nestjs/testing';
import { GetFileProgController } from './get-file-prog.controller';

describe('GetFileProgController', () => {
  let controller: GetFileProgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetFileProgController],
    }).compile();

    controller = module.get<GetFileProgController>(GetFileProgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
