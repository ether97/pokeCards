import { Schema, mongoose } from "mongoose";

const Special_Attack_Schema = new Schema({
  name: { type: String, default: "Special_Attack", immutable: true },
  description: {
    enum: [
      "Highly curious",
      "Mischievous",
      "Thoroughly cunning",
      "Often lost in thought",
      "Very finicky",
    ],
    default: "Highly curious",
    type: String,
  },
  score: {
    type: Number,
    default: Math.floor(Math.random() * (31 - 1 + 1) + 1),
  },
});

export const Special_Attack_IV = mongoose.model(
  "Special_Attack",
  Special_Attack_Schema
);
