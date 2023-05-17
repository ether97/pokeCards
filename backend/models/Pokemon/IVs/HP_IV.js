import { Schema, mongoose } from "mongoose";

const HP_IV_Schema = new Schema({
  name: { type: String, default: "HP_IV", immutable: true },
  description: {
    enum: [
      "Loves to eat",
      "Takes plenty of siestas",
      "Nods off a lot",
      "Scatters things often",
      "Likes to relax",
    ],
    default: "Loves to eat",
    type: String,
  },
  score: {
    type: Number,
    default: Math.floor(Math.random() * (31 - 1 + 1) + 1),
  },
});

export const HP_IV = mongoose.model("HP_IV", HP_IV_Schema);
