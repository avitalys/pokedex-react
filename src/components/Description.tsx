import React from "react";
import { PokemonStat } from "../types";

interface PokemonDescriptionProps {
  height: number;
  weight: number;
  stats: PokemonStat[];
}

const Description = ({ height, weight, stats }: PokemonDescriptionProps) => {
  return (
    <div className="desc">
      <div>
        (`height: ${height}, weight: ${weight}, stats: ${JSON.stringify(stats)}
        `)
      </div>

      {/* <p>
        <b>Height</b> is <b>{height * 10} cm.</b>
      </p>

      <p>
        <b>Weight</b> is <b>{weight * 0.1} kg</b>
      </p>

      <h3>Stats</h3>
      {/* {stats[0].stat.name || "name"} : {stats[0].base_stat || "base_stat"} */}
      {/* {stats.map((stat) => {
        return (
          <p>
            <b>
              `${stat.stat.name}: ${stat.base_state}`;
            </b>
          </p>
        );
      })} */}
    </div>
  );
};

export default Description;
