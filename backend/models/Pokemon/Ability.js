import { Schema, mongoose } from "mongoose";

const AbilitySchema = new Schema({
  name: { type: String, required: true, default: "" },
  effect: { type: String, required: true, default: "" },
});

export const Ability = mongoose.model("Ability", AbilitySchema);
