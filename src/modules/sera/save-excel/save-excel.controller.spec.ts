import { Test, TestingModule } from '@nestjs/testing';
import { SaveExcelController } from './save-excel.controller';

describe('SaveExcelController', () => {
  let controller: SaveExcelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaveExcelController],
    }).compile();

    controller = module.get<SaveExcelController>(SaveExcelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
