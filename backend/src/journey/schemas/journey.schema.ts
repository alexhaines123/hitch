import { Field, ObjectType } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type JourneyDocument = HydratedDocument<Journey>;

@ObjectType()
@Schema()
export class Journey {
  @Field()
  origin: string;

  @Field()
  destination: string;
}

export const JourneySchema = SchemaFactory.createForClass(Journey);
