import { Module } from '@nestjs/common';
import { SaveExcelService } from './save-excel.service';
import { SaveExcelController } from './save-excel.controller';

@Module({
  providers: [SaveExcelService],
  controllers: [SaveExcelController]
})
export class SaveExcelModule {}
