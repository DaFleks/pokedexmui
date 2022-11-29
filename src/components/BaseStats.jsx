import { Grid, Typography, Fade, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { usePokemonContext } from "../contexts/PokemonContext";
import Stat from "./Stat";

const BaseStats = () => {
  // Theme
  const theme = useTheme();
  const { primary } = theme.palette;

  //  Context
  const { stats, active } = usePokemonContext();

  //  State
  const [pkStats, setPkStats] = useState([0, 0, 0, 0, 0, 0]);

  //  Effect 
  useEffect(() => {
    animateStats();
  }, [stats]);

  //  Component Utilities
  const statNames = ["HP", "ATK", "DEF", "SP. ATK", "SP. DEF", "SPD"];

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

  return (
    <Fade in={active} timeout={300}>
      <Grid item xs={12} my={3}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }} textAlign="center" mb={2}>
          Base Stats
        </Typography>
        <Stack>
          {pkStats.map((pkStat, idx) => (
            <Stat key={idx} stat={pkStat} name={statNames[idx]} color={primary.dark} />
          ))}
        </Stack>
      </Grid>
    </Fade>
  );
};

export default BaseStats;
