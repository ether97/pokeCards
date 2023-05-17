import { Schema, mongoose } from "mongoose";

const Special_Defense_Schema = new Schema({
  name: { type: String, default: "Special_Defense", immutable: true },
  description: {
    enum: [
      "Strong willed",
      "Somewhat vain",
      "Strongly defiant",
      "Hates to lose",
      "Somewhat stubborn",
    ],
    default: "Strong willed",
    type: String,
  },
  score: {
    type: Number,
    default: Math.floor(Math.random() * (31 - 1 + 1) + 1),
  },
});

export const Special_Defense_IV = mongoose.model(
  "Special_Defense",
  Special_Defense_Schema
);
