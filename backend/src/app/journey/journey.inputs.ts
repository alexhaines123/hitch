import { Schema as MongooseSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateJourneyInput {
  @Field(() => String)
  origin: string;

  @Field(() => String)
  destination: string;
}

@InputType()
export class ListJourneyInput {
  @Field(() => String, { nullable: false })
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: false })
  origin: string;

  @Field(() => String, { nullable: false })
  destination: string;
}

@InputType()
export class UpdateJourneyInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: false })
  origin: string;

  @Field(() => String, { nullable: false })
  destination: string;
}
