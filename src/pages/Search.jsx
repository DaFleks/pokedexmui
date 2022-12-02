import { useState } from "react";
import { Grid, TextField } from "@mui/material";
import pokemonList from "../data/pokemonSearchList.json";
import PokemonResult from "../components/PokemonResult";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <Grid container p={3} spacing={2} maxWidth={"md"}>
        <Grid item xs={12}>
          <TextField id="outlined-basic" label="Search Pokemon" variant="outlined" autoComplete="off" fullWidth onChange={(e) => setQuery(e.target.value)} />
        </Grid>

        {query.length > 2 &&
          pokemonList
            .filter((pokemon) => pokemon.name.includes(query))
            .map((pokemon) => <PokemonResult key={pokemon.id} id={pokemon.id} name={pokemon.name} types={pokemon.types} />)}
      </Grid>
    </>
  );
};

export default Search;