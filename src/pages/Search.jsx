import { useState } from "react";
import { Grid, TextField, Container } from "@mui/material";
import pokemonList from "../data/pokemonSearchList.json";
import PokemonResult from "../components/PokemonResult";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setTimeout(() => {
      setQuery(e.target.value.toLowerCase());
    }, 500);
  };

  return (
    <>
      <Container maxWidth="md" sx={{ flexGrow: 1, py: 2, mb: 7 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Search Pokemon"
              variant="outlined"
              autoComplete="off"
              fullWidth
              onChange={handleChange}
              sx={{ backgroundColor: "#ddd" }}
            />
          </Grid>
          {query.length === 0 &&
            pokemonList.slice(0, 30).map((pokemon) => <PokemonResult key={pokemon.id} id={pokemon.id} name={pokemon.name} types={pokemon.types} />)}
          {query.length > 2 &&
            pokemonList
              .filter((pokemon) => pokemon.name.includes(query))
              .map((pokemon) => <PokemonResult key={pokemon.id} id={pokemon.id} name={pokemon.name} types={pokemon.types} />)}
        </Grid>
      </Container>
    </>
  );
};

export default Search;
