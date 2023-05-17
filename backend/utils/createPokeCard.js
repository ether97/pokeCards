import { Attack_IV } from "../models/Pokemon/IVs/Attack_IV.js";
import { Defense_IV } from "../models/Pokemon/IVs/Defense_IV.js";
import { Special_Attack_IV } from "../models/Pokemon/IVs/Special_Attack_IV.js";
import { Special_Defense_IV } from "../models/Pokemon/IVs/Special_Defense_IV.js";
import { Speed_IV } from "../models/Pokemon/IVs/Speed_IV.js";
import { HP_IV } from "../models/Pokemon/IVs/HP_IV.js";
import { Type } from "../models/Pokemon/Type.js";
import { Resistance } from "../models/Pokemon/Resistance.js";
import { Weakness } from "../models/Pokemon/Weakness.js";
import { Pokemon } from "../models/Pokemon/Pokemon.js";
import { Card } from "../models/Pokemon_Card/Card.js";
import { Ability } from "../models/Pokemon/Ability.js";

export async function createPokeCard(
  Itype,
  IResistance,
  IWeakness,
  IAbility,
  IWeight,
  ILength,
  IName,
  IBackgroundColor,
  IBackground,
  ICardBackground,
  ICardBackgroundColor,
  IBorder
) {
  var Attack = new Attack_IV();
  console.log(Attack);
  await Attack.save();
  var Defense = new Defense_IV();
  await Defense.save();
  var Special_Attack = new Special_Attack_IV();
  await Special_Attack.save();

  var Special_Defense = new Special_Defense_IV();
  await Special_Defense.save();

  var Speed = new Speed_IV();
  await Speed.save();

  var HP = new HP_IV();
  await HP.save();
  console.log(Defense, Special_Attack, Special_Defense, Speed, HP);
  var type = new Type({ name: Itype });
  await type.save();

  var resistance = new Resistance({ name: IResistance });
  await resistance.save();

  var weakness = new Weakness({ name: IWeakness });
  await weakness.save();
  var ability = new Ability({
    name: IAbility.name,
    effect: IAbility.effect,
  });
  await ability.save();
  console.log(type, weakness, resistance);
  var pokemon = new Pokemon({ name: IName, weight: IWeight, length: ILength });
  pokemon.abilities.push(ability._id);
  pokemon.IVs.Attack = Attack._id;
  pokemon.IVs.Defense = Defense._id;
  pokemon.IVs.Special_Attack = Special_Attack._id;
  pokemon.IVs.Special_Defense = Special_Defense._id;
  pokemon.IVs.Speed = Speed._id;
  pokemon.IVs.HP = HP._id;
  console.log(pokemon);
  await pokemon.save();
  var pokemonCard = new Card({
    pokemon: pokemon._id,
    pokemon_background: IBackgroundColor,
    pokemon_backgroundColor: IBackground,
    card_background: ICardBackground,
    card_backgroundColor: ICardBackgroundColor,
    card_border: IBorder,
  });
  await pokemonCard.save();
  console.log(pokemonCard);
}
