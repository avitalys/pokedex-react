import React from "react";
import { typeColor } from "../utils/colors";
import { PokemonCardProps } from "./Card";

const CardBack = ({ id, images, types }: PokemonCardProps) => {
  // Set themeColor based on pokemon type
  const themeColor = typeColor[types[0].type.name];

  // Card's background
  const backgroundStyle = {
    background: `radial-gradient(circle at 50% 0%, #ffffff 45%, ${themeColor[1]} 20%, ${themeColor[0]} 66%)`,
  };

  return (
    <div className="card-back" style={backgroundStyle}>
      <p className="id">
        <span>#{id}</span>
      </p>
      <img src={images.back_default} />
    </div>
  );
};

export default CardBack;
