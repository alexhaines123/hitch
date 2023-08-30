import { Document } from 'mongoose';

export interface Journey extends Document {
  readonly destination: string;
  readonly origin: string;
}
