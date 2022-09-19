import { Test, TestingModule } from '@nestjs/testing';
import { DeleteEventCanService } from './delete-event-can.service';

describe('DeleteEventCanService', () => {
  let service: DeleteEventCanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteEventCanService],
    }).compile();

    service = module.get<DeleteEventCanService>(DeleteEventCanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
