import { Grid, Stack, Divider, Box, Typography, LinearProgress, Grow } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as typeColor from "../data/typeColors.json";

const BaseStats = (props) => {
  const { stats, types } = props;
  const statNames = ["HP", "ATK", "DEF", "SP. ATK", "SP. DEF", "SPD"];

  const getStatPercentage = (stat) => {
    return Math.round((stat / 255) * 100);
  };

  const theme = createTheme({
    palette: {
      pokemonType: { main: typeColor[types[0].type.name] },
    },
  });

  const progressStyle = {
    fontSize: "0.75rem",
    fontWeight: "bold",
    color: typeColor[types[0].type.name],
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} my={3}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }} textAlign="center" mb={2}>
          Base Stats
        </Typography>
        <Grow in={true} timeout={2000}>
          <Stack>
            {stats.map((stat, idx) => (
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box width="15%" textAlign="right">
                  <Typography variant="p" sx={progressStyle}>
                    {statNames[idx]}
                  </Typography>
                </Box>
                <Box width="70%" px={3}>
                  <LinearProgress color="pokemonType" variant="determinate" value={getStatPercentage(stat.base_stat)} />
                </Box>
                <Box width="15%">
                  <Typography variant="p" sx={progressStyle}>
                    {stat.base_stat}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Grow>
      </Grid>
    </ThemeProvider>
  );
};

export default BaseStats;
