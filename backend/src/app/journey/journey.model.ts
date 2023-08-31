import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema()
export class Journey {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  origin: string;

  @Field(() => String)
  @Prop()
  destination: string;
}

export type JourneyDocument = Journey & Document;

export const JourneySchema = SchemaFactory.createForClass(Journey);
