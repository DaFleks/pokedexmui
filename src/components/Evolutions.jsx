import { Grid, Typography, Stepper, Step, StepLabel, Stack, Box, Divider } from "@mui/material";
import * as typeColors from "../data/typeColors.json";
import capitalize from "../utils/captialize";
import padZeroes from "../utils/padZeroes";

const Evolutions = (props) => {
  const { evolutionData, types } = props;
  const type = props.types[0].type.name;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }} textAlign="center" color={typeColors[type]} mb={2}>
          Evolution
        </Typography>
        <Stack direction="row">
          {evolutionData.map((pk) => (
            <>
              {pk.level > 1 && (
                <Divider sx={{ color: typeColors[type], fontWeight: "bold", fontSize: "0.75rem" }} orientation="vertical" flexItem>
                  Lv. {pk.level}
                </Divider>
              )}
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>
                <img src={pk.image} alt={capitalize(pk.name)} width="100%" />
                <Typography variant="p">{capitalize(pk.name)}</Typography>
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
