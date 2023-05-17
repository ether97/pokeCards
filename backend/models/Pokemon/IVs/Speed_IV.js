import { Schema, mongoose } from "mongoose";

const Speed_Schema = new Schema({
  name: { type: String, default: "Speed", immutable: true },
  description: {
    enum: [
      "Likes to run",
      "Alert to sounds",
      "Impetuous and silly",
      "Somewhat of a clown",
      "Quick to flee",
    ],
    default: "Likes to run",
    type: String,
  },
  score: {
    type: Number,
    default: Math.floor(Math.random() * (31 - 1 + 1) + 1),
  },
});

export const Speed_IV = mongoose.model("Speed", Speed_Schema);
