import { Schema, mongoose } from "mongoose";

const PokemonSchema = new Schema({
  name: { type: String, required: true, default: "" },
  abilities: {
    type: [{ type: Schema.Types.ObjectId, ref: "Ability" }],
    default: [],
  },
  weight: {
    type: Number,
    default: 0,
  },
  length: { type: Number, default: 0 },
  type: { type: Schema.Types.ObjectId, ref: "Type" },
  weakness: { type: Schema.Types.ObjectId, ref: "Weakness" },
  retreat: { enum: [0, 1, 2, 3, 4, 5], default: 0, type: Number },
  resistance: { type: Schema.Types.ObjectId, ref: "Resistance" },
  IVs: {
    Attack: { type: Schema.Types.ObjectId, ref: "Attack_IV" },
    Defense: { type: Schema.Types.ObjectId, ref: "Defense_IV" },
    Special_Attack: { type: Schema.Types.ObjectId, ref: "Special_Attack_IV" },
    Special_Defense: { type: Schema.Types.ObjectId, ref: "Special_Defense_IV" },
    Speed: { type: Schema.Types.ObjectId, ref: "Speed_IV" },
    HP: { type: Schema.Types.ObjectId, ref: "HP_IV" },
  },
});

export const Pokemon = mongoose.model("Pokemon", PokemonSchema);
