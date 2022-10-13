import { Test, TestingModule } from '@nestjs/testing';
import { GetLotsOrThirdlotsController } from './get-lots-or-thirdlots.controller';

describe('GetLotsOrThirdlotsController', () => {
  let controller: GetLotsOrThirdlotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetLotsOrThirdlotsController],
    }).compile();

    controller = module.get<GetLotsOrThirdlotsController>(GetLotsOrThirdlotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
