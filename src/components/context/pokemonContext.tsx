import React, { SetStateAction } from "react";
import { Pokemon } from "../../types";

type PokemonContext = {
  pokemon: Pokemon | undefined;
  setPokemon: React.Dispatch<SetStateAction<Pokemon | undefined>>;
  shouldDisplayPokemon: boolean;
  setShouldDisplayPokemon: React.Dispatch<SetStateAction<boolean>>;
};

export const pokemonContext = React.createContext({} as PokemonContext);
