import { Test, TestingModule } from '@nestjs/testing';
import { JourneyController } from './journey.controller';
import { JourneyService } from './journey.service';

describe('AppController', () => {
  let appController: JourneyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [JourneyController],
      providers: [JourneyService],
    }).compile();

    appController = app.get<JourneyController>(JourneyController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
