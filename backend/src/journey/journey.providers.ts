import { JourneySchema } from './schemas/journey.schema';

export const journeyProviders = [
  {
    provide: 'JOURNEY_MODEL',
    useFactory: (connection) => connection.model('Journey', JourneySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
