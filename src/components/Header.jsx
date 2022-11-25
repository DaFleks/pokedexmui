import { Grid, Typography, Box } from "@mui/material";
import * as typeColors from "../data/typeColors.json";
import capitalize from "../utils/captialize";
import padZeroes from "../utils/padZeroes";
import newShade from "../utils/newShade";

const Header = (props) => {
  const colorName = props.types[0].type.name;

  const HeaderWrap = {
    background: `linear-gradient(180deg, ${typeColors[colorName]} 0%, ${newShade(
      typeColors[colorName],
      80
    )} 100%)`,
    fallbacks: [
      {
        background: typeColors[colorName],
      },
    ],
    borderBottomLeftRadius: "100%",
    borderBottomRightRadius: "100%",
    height: "275px",
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    width: "100%",
    zIndex: -1,
  };

  return (
    <Grid item xs={12} color="white" textAlign="center" mt={2}>
      <Box sx={HeaderWrap}></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: `"Montserrat", "sans-serif"`,
        }}
      >
        <Typography variant="h5">{capitalize(props.name)}</Typography>
        <Typography variant="h5">{padZeroes(props.id)}</Typography>
      </Box>
      <Box sx={{ mb: 3 }}>
        <img
          width="300px"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.id}.png`}
          alt="Pokemon"
        />
      </Box>
    </Grid>
  );
};

export default Header;
