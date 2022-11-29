import { Box, Typography, LinearProgress } from "@mui/material";
import { getStatPercentage } from "../utils/utilities";

const Stat = (props) => {
  //  Props
  const { name, stat, color } = props;

  //  Style
  const progressStyle = {
    fontSize: "0.75rem",
    fontWeight: "bold",
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box width="15%" textAlign="right">
        <Typography color={color} variant="p" sx={progressStyle}>
          {name}
        </Typography>
      </Box>
      <Box width="70%" px={3}>
        <LinearProgress variant="determinate" value={getStatPercentage(stat)} />
      </Box>
      <Box width="15%">
        <Typography color={color} variant="p" sx={progressStyle}>
          {stat.toFixed(0)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Stat;
