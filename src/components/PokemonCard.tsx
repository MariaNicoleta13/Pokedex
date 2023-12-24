import { useContext } from "react";
import "./PokemonCard.scss";
import { pokemonContext } from "./context/pokemonContext";
import NotFoundImg from "../assets/error.png";

function PokemonCard() {
  const { pokemon, shouldDisplayPokemon } = useContext(pokemonContext);

  const renderPokemonArray = (array: string[]) => {
    return array.map((move: string, index: number) => {
      return <div key={index}>{move}</div>;
    });
  };

  return (
    <div className="pokemon-card-container">
      {shouldDisplayPokemon && pokemon ? (
        <>
          <img
            src={pokemon.img}
            alt={pokemon.name + "'s profile picture"}
          ></img>
          <h2 className="pokemon-name">{pokemon.name}</h2>
          <div className="types">{renderPokemonArray(pokemon.types)}</div>
          <div className="moves-label">Moves</div>
          <div className="moves">{renderPokemonArray(pokemon.moves)}</div>
        </>
      ) : (
        <img
          src={NotFoundImg}
          alt="pokemon not found"
          className="error-img"
          data-testid="error-img"
        ></img>
      )}
    </div>
  );
}

export default PokemonCard;
