import { Test, TestingModule } from '@nestjs/testing';
import { TemporaryFillingComerNopubController } from './temporary-filling-comer-nopub.controller';

describe('TemporaryFillingComerNopubController', () => {
  let controller: TemporaryFillingComerNopubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemporaryFillingComerNopubController],
    }).compile();

    controller = module.get<TemporaryFillingComerNopubController>(TemporaryFillingComerNopubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
