import { Test, TestingModule } from '@nestjs/testing';
import { JourneyResolver } from './journey.resolver';

describe('journeyResolver', () => {
  let resolver: JourneyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JourneyResolver],
    }).compile();

    resolver = module.get<JourneyResolver>(JourneyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
