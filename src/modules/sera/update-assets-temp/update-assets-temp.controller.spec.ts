import { Test, TestingModule } from '@nestjs/testing';
import { UpdateAssetsTempController } from './update-assets-temp.controller';

describe('UpdateAssetsTempController', () => {
  let controller: UpdateAssetsTempController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateAssetsTempController],
    }).compile();

    controller = module.get<UpdateAssetsTempController>(UpdateAssetsTempController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
