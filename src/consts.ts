export type Pokemon = {
  name: string;
  types: string[];
  moves: string[];
  img: string;
};

export type PokemonType = {
  type: {
    name: string;
  };
};

export type PokemonMove = {
  move: {
    name: string;
  };
};

export type APIData = {
  name: string;
  id: string;
  types: PokemonType[];
  moves: PokemonMove[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};
