import { Grid, Typography, Zoom, Stack } from "@mui/material";
import { usePokemonContext } from "../contexts/PokemonContext";
import EvolutionPokemon from "../components/EvolutionPokemon";

const Evolutions = () => {
  const { active, evolutionData } = usePokemonContext();

  return (
    <Zoom in={active} timeout={300}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }} textAlign="center" mb={2}>
            Evolutions
          </Typography>
          <Stack direction="row">
            {evolutionData.map((pk) => (
              <EvolutionPokemon key={pk.id} id={pk.id} name={pk.name} level={pk.level} image={pk.image} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Zoom>
  );
};

export default Evolutions;
