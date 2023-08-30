import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type JourneyDocument = HydratedDocument<Journey>;

@Schema()
export class Journey {
  @Prop()
  origin: string;

  @Prop()
  destination: string;
}

export const JourneySchema = SchemaFactory.createForClass(Journey);
