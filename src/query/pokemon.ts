import { fetchapi } from "../api/pokeapi";
import { PokemonResponse } from "../types";

// More info: https://graphql-pokeapi.graphcdn.app/

export const PokemonQuery = `
    query pokemon($name: String!) {
      pokemon(name: $name) {
        id
        name
        order
        weight
        height
        sprites {
          front_default
          back_default
        }
        moves {
          move {
            name
            id
            url
          }
        }
        types {
          type {
            name
          }
        }
        stats {
          base_stat
          stat {
            name
          }
        }
      }
    }`;

interface PokemonParams {
  name: string;
}

export async function fetchPokemonDetails(
  name: string
): Promise<PokemonResponse> {
  const response = await fetchapi<PokemonParams, PokemonResponse>("POST", "/", {
    query: PokemonQuery,
    variables: { name: name },
  });

  return response.data.data;
}
