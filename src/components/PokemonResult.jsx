import { Grid, Paper, Typography, Fade, Box } from "@mui/material";
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
    color: "#5e5e5e",
  };
  return (
    <Fade in={true} timeout={500}>
      <Grid item xs={4}>
        <Paper
          elevation={6}
          sx={pokemonStyle}
          onClick={() => {
            changePokemon(id);
          }}
        >
          <img src={`${url}${id}.png`} alt={name} width="100%" />
          <Box sx={{ backgroundColor: `rgba(100,100,100,0.25)`, width: "100%", color: "white", borderRadius: "5%", py: 0.5 }}>
            <Typography display="block" variant="p">#{id}</Typography>
            <Typography variant="p">{capitalize(name)}</Typography>
          </Box>
        </Paper>
      </Grid>
    </Fade>
  );
};

export default PokemonResult;
