import { Fade, Box, Typography } from "@mui/material";
import { padZeroes, capitalize } from "../utils/utilities";

const HeaderText = (props) => {
  //  Props
  const { id, name, active } = props;

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