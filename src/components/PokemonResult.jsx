import { Grid, Paper, Typography, Chip } from "@mui/material";
import { capitalize } from "../utils/utilities";
import * as typeColors from "../data/typeColors.json";
import useChangePokemon from "../hooks/useChangePokemon";

const PokemonResult = (props) => {
  //  Props
  const { id, name, types } = props;
  const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

  //  Hooks
  const [changePokemon] = useChangePokemon();

  const pokemonStyle = {
    background: `radial-gradient(circle, white 0%, ${typeColors[types[0]]} 150%)`,
    fallbacks: [
      {
        background: typeColors[types[0]],
      },
    ],
    textAlign: "center",
    p: 1,
    overflow: "hidden",
    fontSize: ".75rem",
    fontWeight: "bold",
    color: '#5e5e5e',
  };
  return (
    <Grid item xs={4}>
      <Paper elevation={6} sx={pokemonStyle} onClick={() => {changePokemon(id)}}>
        <img src={`${url}${id}.png`} alt={name} width="100%" />
        {/* <Chip label={id} color="primary"></Chip> */}
        <Typography variant="p">{capitalize(name)}</Typography>
      </Paper>
    </Grid>
  );
};

export default PokemonResult;
