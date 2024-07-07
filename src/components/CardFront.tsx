import React from "react";
import { typeColor } from "../utils/colors";
import { PokemonCardProps } from "./Card";

const CardFront = ({
  id,
  name,
  images,
  types,
  height,
  weight,
  stats,
}: PokemonCardProps) => {
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
    <div className="card-front" style={backgroundStyle}>
      <p className="id">
        <span>#{id}</span>
      </p>
      <p className="hp">
        <span>HP </span>
        {hp}
      </p>
      <img src={images.front_default} />
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
