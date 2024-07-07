import React from "react";
import { PokemonStat, PokemonType, PokemonSprites } from "../types";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

export interface PokemonCardProps {
  id: number;
  name: string;
  images: PokemonSprites;
  types: PokemonType[];
  key: string | number;
  height: number;
  weight: number;
  stats: PokemonStat[];
}

const Card = (cardProps: PokemonCardProps) => {
  return (
    <div className="card">
      <div className="flip-card-inner">
        <CardFront {...cardProps} />
        <CardBack {...cardProps} />
      </div>
    </div>
  );
};

export default Card;
