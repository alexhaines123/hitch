import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Journey, JourneySchema } from './journey.model';
import { JourneyService } from './journey.service';
import { JourneyResolver } from './journey.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Journey.name, schema: JourneySchema }]),
  ],
  providers: [JourneyService, JourneyResolver],
})
export class JourneyModule {}
