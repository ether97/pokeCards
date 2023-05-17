import { Schema, mongoose } from "mongoose";

const Attack_IV_Schema = new Schema({
  name: { type: String, default: "Attack_IV", immutable: true },
  description: {
    enum: [
      "Proud of its power",
      "Likes to thrash about",
      "A little quick-tempered",
      "Likes to fight",
      "Quick tempered",
    ],
    default: "Proud of its power",
    type: String,
  },
  score: {
    type: Number,
    default: Math.floor(Math.random() * (31 - 1 + 1) + 1),
  },
});

export const Attack_IV = mongoose.model("Attack_IV", Attack_IV_Schema);
