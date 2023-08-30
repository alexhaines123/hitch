import { Module } from '@nestjs/common';
import { JourneyModule } from './journey/journey.module';

@Module({
  imports: [JourneyModule],
})
export class AppModule {}
