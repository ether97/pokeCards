import { Schema, mongoose } from "mongoose";

const CardSchema = new Schema({
  pokemon: { type: Schema.Types.ObjectId, ref: "Pokemon" },
  pokemon_background: { type: String, default: "" },
  pokemon_backgroundColor: { type: String, default: "" },
  card_background: { type: String, default: "" },
  card_backgroundColor: { type: String, default: "white" },
  card_border: { type: String, default: "" },
});

export const Card = mongoose.model("Card", CardSchema);
