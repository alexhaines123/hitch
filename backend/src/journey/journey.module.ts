import { Module } from '@nestjs/common';
import { JourneyService } from './journey.service';
import { JourneyResolver } from './journey.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Journey, JourneySchema } from './schemas/journey.schema';

@Module({
  // controllers: [JourneyController],
  providers: [JourneyService, JourneyResolver],
  imports: [
    MongooseModule.forFeature([
      {
        name: Journey.name,
        schema: JourneySchema,
      },
    ]),
  ],
})
export class JourneyModule {}
