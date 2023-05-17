import { Schema, mongoose } from "mongoose";

const TypeSchema = new Schema({
  name: {
    type: String,
    enum: [
      "None",
      "Normal",
      "Fire",
      "Water",
      "Grass",
      "Electric",
      "Ice",
      "Fighting",
      "Poison",
      "Ground",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Ghost",
      "Dark",
      "Dragon",
      "Steel",
      "Fairy",
    ],
    default: "None",
  },
});

export const Type = mongoose.model("Type", TypeSchema);
