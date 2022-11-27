import { createContext, useState } from "react";
import usePath from "../hooks/usePath";
import usePokemon from "../hooks/usePokemon";

export const PokemonContext = createContext();

const PokemonProvider = (props) => {
  const [pokemonData, evolutionData, isLoaded] = usePokemon(usePath());

  const { height, id, name, stats, types, weight } = pokemonData;
  const nEvolves = evolutionData.length;

  const [active, setActive] = useState(false);

  return (
    <PokemonContext.Provider value={{ pokemonData, evolutionData, isLoaded, height, id, name, stats, types, weight, nEvolves, active, setActive }}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
