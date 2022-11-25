import { Grid, Stack, Box, Typography, LinearProgress, Grow } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import * as typeColor from "../data/typeColors.json";

const BaseStats = (props) => {
  const { stats, types } = props;
  const statNames = ["HP", "ATK", "DEF", "SP. ATK", "SP. DEF", "SPD"];
  const getStatPercentage = (stat) => Math.round((stat / 255) * 100);

  const animateStats = () => {
    let count = 1;
    const maxCount = 100;
    const quotientsByMax = stats.map((stat) => stat.base_stat / maxCount);
    let addedStats = [...quotientsByMax];
    setPkStats(addedStats);

    const animate = setInterval(() => {
      count++;
      addedStats = addedStats.map((stat, idx) => (stat += quotientsByMax[idx]));
      setPkStats(addedStats);
      if (count === maxCount) clearInterval(animate);
    }, 1);
  };

  const progressStyle = {
    fontSize: "0.75rem",
    fontWeight: "bold",
    color: typeColor[types[0].type.name],
  };

  //  State
  const [pkStats, setPkStats] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    animateStats();
  }, []);

  return (
    <Grid item xs={12} my={3}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }} textAlign="center" mb={2}>
        Base Stats
      </Typography>
      <Grow in={true} timeout={300}>
        <Stack>
          {pkStats.map((pkStat, idx) => (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Box width="15%" textAlign="right">
                <Typography variant="p" sx={progressStyle}>
                  {statNames[idx]}
                </Typography>
              </Box>
              <Box width="70%" px={3}>
                <LinearProgress variant="determinate" value={getStatPercentage(pkStat)} />
              </Box>
              <Box width="15%">
                <Typography variant="p" sx={progressStyle}>
                  {pkStat.toFixed(0)}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Grow>
    </Grid>
  );
};

export default BaseStats;
