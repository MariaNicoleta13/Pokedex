import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { pokemonContext } from "../components/context/pokemonContext";
import PokemonCard from "../components/PokemonCard";
import { screen } from "@testing-library/react";

describe("PokemonCard", () => {
  it("should render not display a pokemon", () => {
    render(
      <pokemonContext.Provider
        value={{
          pokemon: undefined,
          shouldDisplayPokemon: false,
          setPokemon: jest.fn(),
          setShouldDisplayPokemon: jest.fn(),
        }}
      >
        <PokemonCard></PokemonCard>
      </pokemonContext.Provider>
    );

    expect(screen.getByTestId("error-img")).toBeInTheDocument();
  });
});
