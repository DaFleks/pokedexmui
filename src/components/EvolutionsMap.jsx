import React from 'react';
import { Stack, Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { usePokemonContext } from "../contexts/PokemonContext";
import { capitalize, padZeroes } from "../utils/utilities";

const EvolutionsMap = () => {
  const theme = useTheme();
  const { primary } = theme.palette;
  const { evolutionData } = usePokemonContext();

  //  Styles
  const dividerStyle = { color: primary.dark, fontWeight: "bold", fontSize: "0.75rem" };
  const pokemonStyle = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontWeight: "bold" };

  return (
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
  );
};

export default EvolutionsMap;
