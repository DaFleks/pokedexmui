import { Box, Typography } from "@mui/material";

const Biometric = (props) => {
  //  Props
  const { name, value } = props;

  return (
    <Box mx={7}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {name}
      </Typography>
      <Typography variant="p">{value}</Typography>
    </Box>
  );
};

export default Biometric;
