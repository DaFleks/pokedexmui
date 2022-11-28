import { Fade, Box, Typography } from "@mui/material";
import { usePokemonContext } from "../contexts/PokemonContext";
import { padZeroes, capitalize } from "../utils/utilities";

const HeaderText = () => {
  const { id, name, active } = usePokemonContext();
  return (
    <Fade in={active} timeout={300}>
      <Box mb={3} textAlign="center">
        <Typography variant="h3">{capitalize(name)}</Typography>
        <Typography variant="p" sx={{ fontWeight: "bold", color: "grey" }}>
          {padZeroes(id)}
        </Typography>
      </Box>
    </Fade>
  );
};

export default HeaderText;