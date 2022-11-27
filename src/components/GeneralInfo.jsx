import { Grid, Stack, Divider, Box, Typography } from "@mui/material";
import { getFeet, getPounds } from "../utils/converters";
import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const GeneralInfo = () => {
  const { height, weight } = useContext(PokemonContext);

  return (
    <Grid item xs={12} mb={3}>
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
    </Grid>
  );
};

export default GeneralInfo;
