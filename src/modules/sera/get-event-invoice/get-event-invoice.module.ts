import { Module } from '@nestjs/common';
import { GetEventInvoiceService } from './get-event-invoice.service';
import { GetEventInvoiceController } from './get-event-invoice.controller';

@Module({
  providers: [GetEventInvoiceService],
  controllers: [GetEventInvoiceController]
})
export class GetEventInvoiceModule {}
