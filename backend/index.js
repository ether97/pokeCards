import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { createPokeCard } from "./utils/createPokeCard.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    dbName: "pokemon",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    createPokeCard(
      "Fairy",
      "Ice",
      "Fire",
      { name: "tantrum", effect: "kill everything" },
      100,
      30,
      "Atmaja",
      "",
      "linear-gradient(to top right, turquoise, black)",
      "",
      "transparent",
      "5px solid black"
    );
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Error connecting to DB: ${err}`);
  });
