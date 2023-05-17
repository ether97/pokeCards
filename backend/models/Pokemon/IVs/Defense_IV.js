import { Schema, mongoose } from "mongoose";

const Defense_IV_Schema = new Schema({
  name: { type: String, default: "Defense_IV", immutable: true },
  description: {
    enum: [
      "Sturdy body",
      "Capable of taking hits",
      "Highly persistent",
      "Good endurance",
      "Good perseverance",
    ],
    default: "Sturdy body",
    type: String,
  },
  score: {
    type: Number,
    default: Math.floor(Math.random() * (31 - 1 + 1) + 1),
  },
});

export const Defense_IV = mongoose.model("Defense_IV", Defense_IV_Schema);
