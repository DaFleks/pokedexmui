import { Grid, Stack, Box, Typography, LinearProgress, Fade } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const BaseStats = () => {
  const theme = useTheme();
  const { primary } = theme.palette;

  const { stats, active } = useContext(PokemonContext);
  const statNames = ["HP", "ATK", "DEF", "SP. ATK", "SP. DEF", "SPD"];
  const getStatPercentage = (stat) => Math.round((stat / 255) * 100);

  const animateStats = () => {
    let count = 1;
    const maxCount = 10;
    const quotientsByMax = stats.map((stat) => stat.base_stat / maxCount);
    let addedStats = [...quotientsByMax];
    setPkStats(addedStats);

    const animate = setInterval(() => {
      count++;
      addedStats = addedStats.map((stat, idx) => (stat += quotientsByMax[idx]));
      setPkStats(addedStats);
      if (count === maxCount) clearInterval(animate);
    }, 100);
  };

  const progressStyle = {
    fontSize: "0.75rem",
    fontWeight: "bold",
  };

  //  State
  const [pkStats, setPkStats] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    animateStats();
  }, [stats]);

  return (
    <Fade in={active} timeout={300}>
      <Grid item xs={12} my={3}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }} textAlign="center" mb={2}>
          Base Stats
        </Typography>
        <Stack>
          {pkStats.map((pkStat, idx) => (
            <Box key={idx} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Box width="15%" textAlign="right">
                <Typography color={primary.dark} variant="p" sx={progressStyle}>
                  {statNames[idx]}
                </Typography>
              </Box>
              <Box width="70%" px={3}>
                <LinearProgress variant="determinate" value={getStatPercentage(pkStat)} />
              </Box>
              <Box width="15%">
                <Typography color={primary.dark} variant="p" sx={progressStyle}>
                  {pkStat.toFixed(0)}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Grid>
    </Fade>
  );
};

export default BaseStats;
