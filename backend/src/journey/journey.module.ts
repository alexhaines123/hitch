import { Module } from '@nestjs/common';
import { JourneyController } from './journey.controller';
import { JourneyService } from './journey.service';
import { journeyProviders } from './journey.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [JourneyController],
  providers: [JourneyService, ...journeyProviders],
})
export class JourneyModule {}
