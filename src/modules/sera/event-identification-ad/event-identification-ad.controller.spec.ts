import { Test, TestingModule } from '@nestjs/testing';
import { EventIdentificationAdController } from './event-identification-ad.controller';

describe('EventIdentificationAdController', () => {
  let controller: EventIdentificationAdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventIdentificationAdController],
    }).compile();

    controller = module.get<EventIdentificationAdController>(EventIdentificationAdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
