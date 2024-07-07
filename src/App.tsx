import React, { useEffect } from "react";
import CardFront from "./components/CardFront";
import type { PokemonsListResult, Pokemon } from "./types";
import { fetchPokemonDetails } from "./query/pokemon";
import { fetchPokemonsList } from "./query/pokemonsList";
import usePagination from "./hooks/useGeneratorPagination";
import "./App.css";

const getMorePokemons = async (limit = 10, offset = 0) => {
  const data = await fetchPokemonsList(limit, offset);
  const pokemons = data.pokemons;

  async function createPokemonObject(results: PokemonsListResult[]) {
    const newPokemons: Array<Pokemon> = [];

    await Promise.all(
      results.map(async (pokemon) => {
        const data = await fetchPokemonDetails(pokemon.name);
        console.log(data);
        newPokemons.push(data.pokemon);
      })
    );

    // sort the new pokemon by id
    return newPokemons.sort((a, b) => a.id - b.id);
  }

  return createPokemonObject(data.pokemons.results);
};

function App() {
  const { data, isLoading, error, fetchNextPage } =
    usePagination<Pokemon>(getMorePokemons);

  useEffect(() => {
    console.log("use effect is called");
    fetchNextPage.next();
  }, []);

  // useCallback(() => {
  //   first;
  // }, [second]);

  return (
    <div className="container">
      <h1>Pokemon Kingdom</h1>
      <div className="">
        {data.map((pokemon, index) => (
          <CardFront
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types}
            key={pokemon.id}
            height={pokemon.height}
            weight={pokemon.weight}
            stats={pokemon.stats}
          />
        ))}
      </div>

      {error ? <div>error.message</div> : ""}

      {isLoading ? (
        "loading..."
      ) : (
        <button className="load-more" onClick={() => fetchNextPage.next()}>
          More Pokemons
        </button>
      )}
    </div>
  );
}

export default App;
