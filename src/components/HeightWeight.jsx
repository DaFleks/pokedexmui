import { Grid, Stack, Divider, Box, Typography, Fade } from "@mui/material";
import { getFeet, getPounds } from "../utils/utilities";
import { usePokemonContext } from "../contexts/PokemonContext";

const HeightWeight = () => {
  const { height, weight, active } = usePokemonContext();

  return (
    <Grid item xs={12} mb={3}>
      <Fade in={active} timeout={300}>
        <Stack justifyContent="center" direction="row" textAlign="center" divider={<Divider orientation="vertical" flexItem></Divider>}>
          <Box mx={7}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Height
            </Typography>
            <Typography variant="p">{getFeet(height)}</Typography>
          </Box>
          <Box mx={7}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Weight
            </Typography>
            <Typography variant="p">{getPounds(weight)}</Typography>
          </Box>
        </Stack>
      </Fade>
    </Grid>
  );
};

export default HeightWeight;
