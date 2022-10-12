import { Test, TestingModule } from '@nestjs/testing';
import { SaveExcelService } from './save-excel.service';

describe('SaveExcelService', () => {
  let service: SaveExcelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaveExcelService],
    }).compile();

    service = module.get<SaveExcelService>(SaveExcelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
