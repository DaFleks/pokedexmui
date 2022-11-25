import { Grid, Typography, Box } from "@mui/material";
import * as typeColors from "../data/typeColors.json";
import capitalize from "../utils/captialize";
import padZeroes from "../utils/padZeroes";
import newShade from "../utils/newShade";

const Header = (props) => {
  const { id, name, types } = props;
  const colorName = types[0].type.name;
  const colorName2 = types.length > 1 ? props.types[1].type.name : null;
  const bgStr = `linear-gradient(180deg, ${typeColors[colorName]} 0%,`;
  const background = props.types.length > 1 ? `${bgStr}${typeColors[colorName2]} 80%)` : `${bgStr}${newShade(typeColors[colorName], 80)})`;
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;

  const HeaderWrap = {
    background: background,
    fallbacks: [
      {
        background: typeColors[colorName],
      },
    ],
    borderBottomLeftRadius: "100%",
    borderBottomRightRadius: "100%",
    height: "150px",
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    width: "100%",
    zIndex: -1,
  };

  return (
    <Grid container mt={2}>
      <Grid item xs={12} textAlign="center">
        <Box sx={HeaderWrap}></Box>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={`${imgUrl}${id}.png`} alt={name} width="200px" />
        </Box>
        <Box mb={3} textAlign="center">
          <Typography variant="h3">{capitalize(name)}</Typography>
          <Typography variant="p" sx={{ fontWeight: "bold", color: "grey" }}>
            {padZeroes(id)}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
