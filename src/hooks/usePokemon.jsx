import { useState, useEffect } from "react";

const usePokemon = (id) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [evolutionData, setEvolutionData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const tempPokemonData = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const speciesData = await fetchData(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
      const evolutionResponse = await fetchData(speciesData.evolution_chain.url);
      const tempEvolutionData = await getEvolutionChain(await evolutionResponse);
      setPokemonData(tempPokemonData);
      setEvolutionData(tempEvolutionData);
      setIsLoaded(true);
    })();
  }, [id]);
  return [pokemonData, evolutionData, isLoaded, setIsLoaded];
};

const fetchData = (url) => {
  return new Promise(async (resolve) => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    resolve(data);
  });
};

const getEvolutionChain = (data) => {
  return new Promise(async (resolve) => {
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

    let evolutionArr = [
      {
        name: data.chain.species.name,
        image: `${url}${getPokemonId(data.chain.species.url)}.png`,
        id: getPokemonId(data.chain.species.url),
      },
    ];

    if (data.chain.evolves_to.length > 0) {
      pushPokemon(evolutionArr, data.chain.evolves_to[0]);
      if (data.chain.evolves_to[0].evolves_to.length > 0) {
        pushPokemon(evolutionArr, data.chain.evolves_to[0].evolves_to[0]);
      }
    }

    resolve(evolutionArr);
  });
};

const getPokemonId = (str) => parseInt(str.slice(42));

const pushPokemon = (arr, data) => {
  const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  let evolveMethod = data.evolution_details[0].min_level;

  if (!data.evolution_details[0].min_level) {
    if (data.evolution_details[0].trigger.name === "trade") {
      evolveMethod = "Trade";
    } else {
      try {
        evolveMethod = data.evolution_details[0].item.name;
      } catch (e) {
        console.log(e);
      } finally {
        evolveMethod = "?";
      }
    }
  }

  arr.push({
    name: data.species.name,
    level: evolveMethod,
    image: `${url}${getPokemonId(data.species.url)}.png`,
    id: getPokemonId(data.species.url),
  });
};

export default usePokemon;
