import { Test, TestingModule } from '@nestjs/testing';
import { GetEventInvoiceService } from './get-event-invoice.service';

describe('GetEventInvoiceService', () => {
  let service: GetEventInvoiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetEventInvoiceService],
    }).compile();

    service = module.get<GetEventInvoiceService>(GetEventInvoiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
