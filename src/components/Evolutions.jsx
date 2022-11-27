import { Grid, Typography, Stack, Box, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import capitalize from "../utils/captialize";
import padZeroes from "../utils/padZeroes";
import React, { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const Evolutions = () => {
  const theme = useTheme();
  const { primary } = theme.palette;
  const { evolutionData } = useContext(PokemonContext);

  //  Styles
  const dividerStyle = { color: primary.dark, fontWeight: "bold", fontSize: "0.75rem" };
  const pokemonStyle = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontWeight: "bold" };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }} textAlign="center" mb={2}>
          Evolutions
        </Typography>
        <Stack direction="row">
          {evolutionData.map((pk, idx) => (
            <React.Fragment key={idx}>
              {pk.level && (
                <Divider sx={dividerStyle} orientation="vertical" flexItem>
                  {isNaN(pk.level) ? capitalize(pk.level) : `Lv.${pk.level}`}
                </Divider>
              )}

              <Box sx={pokemonStyle}>
                <img src={pk.image} alt={capitalize(pk.name)} width="100%" />
                <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                  {capitalize(pk.name)}
                </Typography>
                <Typography variant="p" sx={{ fontSize: "0.75rem", color: "grey" }}>
                  {padZeroes(pk.id)}
                </Typography>
              </Box>
            </React.Fragment>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Evolutions;
