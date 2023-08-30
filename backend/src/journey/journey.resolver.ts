// books.resolver.ts
import { Resolver, Query } from '@nestjs/graphql';
import { JourneyService } from './journey.service';
import { Journey } from '../journey/schemas/journey.schema';

@Resolver(() => Journey)
export class JourneyResolver {
  constructor(private readonly journeyService: JourneyService) {}

  @Query(() => [Journey])
  async journeys(): Promise<Journey[]> {
    return this.journeyService.findAll();
  }
}
