import { fetchapi } from "../api/pokeapi";
import { PokemonsListResponse } from "../types";

// More info: https://graphql-pokeapi.vercel.app/

export const PokemonsListQuery = `
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            next
            previous
            status
            message
            results {
                url
                name
                image
            }
        }
    }`;

interface PokemonsListParams {
  limit: number;
  offset: number;
}

export async function fetchPokemonsList(
  limit = 10,
  offset = 0
): Promise<PokemonsListResponse> {
  const response = await fetchapi<PokemonsListParams, PokemonsListResponse>(
    "POST",
    "/",
    {
      query: PokemonsListQuery,
      variables: { limit: limit, offset: offset },
    }
  );

  return response.data.data;
}
