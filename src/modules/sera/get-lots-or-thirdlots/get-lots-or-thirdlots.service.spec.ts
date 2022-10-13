import { Test, TestingModule } from '@nestjs/testing';
import { GetLotsOrThirdlotsService } from './get-lots-or-thirdlots.service';

describe('GetLotsOrThirdlotsService', () => {
  let service: GetLotsOrThirdlotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetLotsOrThirdlotsService],
    }).compile();

    service = module.get<GetLotsOrThirdlotsService>(GetLotsOrThirdlotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
