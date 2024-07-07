import React, { useState } from "react";
import { PokemonStat, PokemonType } from "../types";
import { typeColor } from "../utils/colors";

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  types: PokemonType[];
  key: string | number;
  height: number;
  weight: number;
  stats: PokemonStat[];
}

const CardFront = ({
  id,
  name,
  image,
  types,
  height,
  weight,
  stats,
}: PokemonCardProps) => {
  const [show, setShow] = useState(false);

  const pokeName = name[0].toUpperCase() + name.slice(1);
  const hp = stats[0].base_stat;
  const statAttack = stats[1].base_stat;
  const statDefense = stats[2].base_stat;
  const statSpeed = stats[5].base_stat;

  // Set themeColor based on pokemon type
  const themeColor = typeColor[types[0].type.name];

  // type's Span style, by type name
  const typeStyle = (name: string) => {
    return { backgroundColor: `${typeColor[name][0]}` };
  };

  // Card's background
  const backgroundStyle = {
    background: `radial-gradient(circle at 50% 0%, ${themeColor[0]} 10%, ${themeColor[1]} 45%, #ffffff 36%)`,
  };

  return (
    <div className="card" style={backgroundStyle}>
      <p className="hp">
        <span>HP </span>
        {hp}
      </p>
      <img src={image} />
      <h2 className="poke-name">{pokeName}</h2>
      <div className="types">
        {types.map((item) => (
          <span key={name + id} style={typeStyle(item.type.name)}>
            {item.type.name}
          </span>
        ))}
      </div>
      <div className="stats">
        <div>
          <h3>{statAttack}</h3>
          <p>Attack</p>
        </div>
        <div>
          <h3>{statDefense}</h3>
          <p>Defense</p>
        </div>
        <div>
          <h3>{statSpeed}</h3>
          <p>Speed</p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
