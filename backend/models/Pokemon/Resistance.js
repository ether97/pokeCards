import { Schema, mongoose } from "mongoose";

const ResistanceSchema = new Schema({
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

export const Resistance = mongoose.model("Resistance", ResistanceSchema);
