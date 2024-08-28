import { Schema, model } from 'mongoose';
import { TCard } from './card.interface';

const cardSchema = new Schema<TCard>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Card = model<TCard>('Card', cardSchema);
