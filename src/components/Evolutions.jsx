import { Grid, Typography, Zoom } from "@mui/material";
import { usePokemonContext } from "../contexts/PokemonContext";
import EvolutionsMap from "./EvolutionsMap";

const Evolutions = () => {
  const { active } = usePokemonContext();

  return (
    <Zoom in={active} timeout={300}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }} textAlign="center" mb={2}>
            Evolutions
          </Typography>
          <EvolutionsMap />
        </Grid>
      </Grid>
    </Zoom>
  );
};

export default Evolutions;
