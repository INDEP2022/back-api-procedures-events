import { Test, TestingModule } from '@nestjs/testing';
import { UpdateAssetsTempService } from './update-assets-temp.service';

describe('UpdateAssetsTempService', () => {
  let service: UpdateAssetsTempService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateAssetsTempService],
    }).compile();

    service = module.get<UpdateAssetsTempService>(UpdateAssetsTempService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
