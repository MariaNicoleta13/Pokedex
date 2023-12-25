import { useContext, useEffect, useState } from "react";
import { pokemonContext } from "./context/pokemonContext";
import "./SearchInput.scss";

import { SearchIcon } from "./icons/SearchIcon";
import { APIData, PokemonMove, PokemonType } from "../types";

function SearchInput() {
  const { setPokemon, setShouldDisplayPokemon } = useContext(pokemonContext);
  const randomId = Math.floor(Math.random() * 151) + 1; //generation 1 has 151 pokemons
  const [query, setQuery] = useState("");
  const [displayErrorMessage, setDisplayErrorMessage] = useState("");
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      fetchData(randomId.toString());
      return;
    }

    const timeOutId = setTimeout(() => {
      fetchData(query);
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  const fetchData = async function data(query: string) {
    try {
      if (!query) return;
      const pokemonAPI = `https://pokeapi.co/api/v2/pokemon/${query.toLocaleLowerCase()}`;
      const response = await fetch(pokemonAPI);
      const data = await response.json();

      setDisplayErrorMessage("");
      setShouldDisplayPokemon(true);
      buildPokemonData(data);
    } catch (error) {
      setDisplayErrorMessage(`${query}`);
      setShouldDisplayPokemon(false);
      console.error("Error fetching data:", error);
    }
  };

  const buildPokemonData = (data: APIData) => {
    const moves = data.moves.map((moveData: PokemonMove) => {
      return moveData.move.name;
    });
    const types = data.types.map((typeData: PokemonType) => {
      return typeData.type.name;
    });
    let pokemonData = {
      name: data.name,
      id: data.id,
      moves: moves,
      types: types,
      img: data.sprites.other["official-artwork"]["front_default"],
    };
    setPokemon(pokemonData);
    if (pokemonData.name !== query) setQuery(pokemonData.name);
  };

  return (
    <>
      <div className={`input-container ${displayErrorMessage ? "error" : ""}`}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <SearchIcon />
      </div>
      {displayErrorMessage ? (
        <p className="error-msg">
          <span>{displayErrorMessage}</span> was not found
        </p>
      ) : null}
    </>
  );
}

export default SearchInput;
