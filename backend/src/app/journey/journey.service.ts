import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { Journey, JourneyDocument } from './journey.model';
import {
  CreateJourneyInput,
  ListJourneyInput,
  UpdateJourneyInput,
} from './journey.inputs';

@Injectable()
export class JourneyService {
  constructor(
    @InjectModel(Journey.name) private journeyModel: Model<JourneyDocument>,
  ) {}

  create(payload: CreateJourneyInput) {
    const createdjourney = new this.journeyModel(payload);
    return createdjourney.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.journeyModel.findById(_id).exec();
  }

  list(filters: ListJourneyInput) {
    return this.journeyModel.find({ ...filters }).exec();
  }

  update(payload: UpdateJourneyInput) {
    return this.journeyModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.journeyModel.findByIdAndDelete(_id).exec();
  }
}
