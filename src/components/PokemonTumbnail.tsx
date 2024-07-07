import { useState } from "react";
import Description from "./Description";
import React from "react";
import { PokemonStat, PokemonType } from "../types";

interface PokemonThumbnailProps {
  id: number;
  name: string;
  image: string;
  types: PokemonType[];
  key: string | number;
  height: number;
  weight: number;
  stats: PokemonStat[];
}

const PokemonThumbnail = ({
  id,
  name,
  image,
  types,
  height,
  weight,
  stats,
}: PokemonThumbnailProps) => {
  const style = `thumb-container ${types[0].type.name}`;
  const [show, setShow] = useState(false);
  return (
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name.toUpperCase()}</h3>
        <small>Type : {types[0].type.name}</small>
        <button className="pokeinfo" onClick={() => setShow(!show)}>
          {show === true ? "Know less..." : "Know more..."}
        </button>
        {show === true ? (
          <Description weight={weight} height={height} stats={stats} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PokemonThumbnail;
