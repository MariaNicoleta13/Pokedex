import { useState } from "react";

import "./App.scss";
import PokemonCard from "./components/PokemonCard";
import { Pokemon } from "./consts";
import SearchInput from "./components/SearchInput";
import { pokemonContext } from "./components/context/pokemonContest";

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();
  const [shouldDisplayPokemon, setShouldDisplayPokemon] = useState(true);
  const value = {
    pokemon,
    setPokemon,
    shouldDisplayPokemon,
    setShouldDisplayPokemon,
  };

  return (
    <>
      <pokemonContext.Provider value={value}>
        <div data-theme={pokemon?.types[0]} className="app-container">
          <SearchInput />
          <PokemonCard />
        </div>
      </pokemonContext.Provider>
    </>
  );
}

export default App;
