import { Schema, mongoose } from "mongoose";

const WeaknessSchema = new Schema({
  name: {
    type: String,
    enum: [
      "None",
      "Fire",
      "Water",
      "Grass",
      "Electric",
      "Ice",
      "Poison",
      "Rock",
      "Steel",
    ],
    default: "None",
  },
});

export const Weakness = mongoose.model("Weakness", WeaknessSchema);
