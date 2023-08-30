import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Journey } from './interfaces/journey.interface';
import { CreateJourneyDto } from './dto/create-journey.dto';

@Injectable()
export class JourneyService {
  constructor(
    @Inject('JOURNEY_MODEL')
    private journeyModel: Model<Journey>,
  ) {}

  async create(dto: CreateJourneyDto): Promise<Journey> {
    const obj = this.journeyModel.create(dto);
    return obj;
  }

  async findAll(): Promise<Journey[]> {
    return this.journeyModel.find().exec();
  }
}
