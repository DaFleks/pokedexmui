import { createContext, useContext, useState } from "react";
import usePath from "../hooks/usePath";
import usePokemon from "../hooks/usePokemon";

var PokemonContext = createContext();

export const usePokemonContext = () => useContext(PokemonContext);

const PokemonProvider = (props) => {
  const [active, setActive] = useState(false);
  const [pokemonData, evolutionData, isLoaded, setIsLoaded] = usePokemon(usePath());

  const { height, id, name, stats, types, weight } = pokemonData;
  const nEvolves = evolutionData.length;

  return (
    <PokemonContext.Provider value={{ pokemonData, evolutionData, isLoaded, setIsLoaded, height, id, name, stats, types, weight, nEvolves, active, setActive }}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
