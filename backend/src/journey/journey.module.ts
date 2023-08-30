import { Module } from '@nestjs/common';
import { JourneyController } from './journey.controller';
import { JourneyService } from './journey.service';
import { MongooseModule } from '@nestjs/mongoose';
import { journeyProviders } from './journey.providers';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [JourneyController],
  providers: [JourneyService, ...journeyProviders],
})
export class JourneyModule { }
