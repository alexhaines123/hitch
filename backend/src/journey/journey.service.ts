import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateJourneyDto } from './dto/create-journey.dto';
import { JourneyDocument, Journey } from './schemas/journey.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class JourneyService {
  constructor(
    @InjectModel(Journey.name)
    private journeyModel: Model<JourneyDocument>,
  ) {}

  async create(dto: CreateJourneyDto): Promise<Journey> {
    const obj = this.journeyModel.create(dto);
    return obj;
  }

  async findAll(): Promise<Journey[]> {
    return this.journeyModel.find().exec();
  }
}
