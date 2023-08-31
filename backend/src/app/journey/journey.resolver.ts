import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { Journey } from './journey.model';
import { JourneyService } from './journey.service';
import {
  CreateJourneyInput,
  ListJourneyInput,
  UpdateJourneyInput,
} from './journey.inputs';

@Resolver(() => Journey)
export class JourneyResolver {
  constructor(private journeyService: JourneyService) {}

  @Query(() => Journey)
  async journey(@Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId) {
    return this.journeyService.getById(_id);
  }

  @Query(() => [Journey])
  async journeys(@Args('filters', { nullable: true }) filters?: ListJourneyInput) {
    return this.journeyService.list(filters);
  }

  @Mutation(() => Journey)
  async createJourney(@Args('payload') payload: CreateJourneyInput) {
    return this.journeyService.create(payload);
  }

  @Mutation(() => Journey)
  async updateJourney(@Args('payload') payload: UpdateJourneyInput) {
    return this.journeyService.update(payload);
  }

  @Mutation(() => Journey)
  async deleteJourney(@Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId) {
    return this.journeyService.delete(_id);
  }
}
