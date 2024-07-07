export interface PokemonsListResponse {
  pokemons: {
    count: number;
    next: string;
    previous: string;
    status: string;
    message: string;
    results: PokemonsListResult[];
  };
}

export interface PokemonsListResult {
  url: string;
  name: string;
  image: string;
}

export interface PokemonResponse {
  pokemon: Pokemon;
}

export interface Pokemon {
  id: number;
  name: string;
  order: number;
  weight: number;
  height: number;
  sprites: PokemonSprites;
  moves: {
    move: {
      name: string;
    };
  };
  types: PokemonType[];
  stats: PokemonStat[];
}

export interface PokemonSprites {
  front_default: string;
  back_default: string;
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}
