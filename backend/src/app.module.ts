import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JourneyModule } from './journey/journey.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), JourneyModule],
})
export class AppModule {}
