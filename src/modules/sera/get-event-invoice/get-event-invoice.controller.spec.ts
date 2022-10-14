import { Test, TestingModule } from '@nestjs/testing';
import { GetEventInvoiceController } from './get-event-invoice.controller';

describe('GetEventInvoiceController', () => {
  let controller: GetEventInvoiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetEventInvoiceController],
    }).compile();

    controller = module.get<GetEventInvoiceController>(GetEventInvoiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
