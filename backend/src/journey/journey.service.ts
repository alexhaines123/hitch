import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Journey } from './interfaces/journey.interface';

@Injectable()
export class JourneyService {
  constructor(
    @Inject('JOURNEY_MODEL')
    private journeyModel: Model<Journey>,
  ) { }

  async findAll(): Promise<Journey[]> {
    return this.journeyModel.find().exec();
  }
}
