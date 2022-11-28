import { Grid, Stack, Divider, Box, Typography, Fade } from "@mui/material";
import { getFeet, getPounds } from "../utils/converters";
import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const GeneralInfo = () => {
  const { height, weight, active } = useContext(PokemonContext);

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

export default GeneralInfo;
