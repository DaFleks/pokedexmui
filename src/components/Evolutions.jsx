import { Grid, Typography, Stack, Box, Divider } from "@mui/material";
import * as typeColors from "../data/typeColors.json";
import capitalize from "../utils/captialize";
import padZeroes from "../utils/padZeroes";

const Evolutions = (props) => {
  const { evolutionData, types } = props;
  const type = types[0].type.name;

  //  Styles
  const dividerStyle = { color: typeColors[type], fontWeight: "bold", fontSize: "0.75rem" };
  const pokemonStyle = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontWeight: "bold" };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }} textAlign="center" mb={2}>
          Evolution
        </Typography>
        <Stack direction="row">
          {evolutionData.map((pk) => (
            <>
              {pk.level > 1 && (
                <Divider sx={dividerStyle} orientation="vertical" flexItem>
                  Lv. {pk.level}
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
            </>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Evolutions;
