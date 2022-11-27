import { Grid, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import capitalize from "../utils/captialize";
import padZeroes from "../utils/padZeroes";
import HeaderImage from "./HeaderImage";

const Header = () => {
  const { primary, secondary } = useTheme().palette;
  const { id, name, types } = useContext(PokemonContext);

  const bgStr = `linear-gradient(180deg, ${primary.main} 0%,`;
  const background = types.length > 1 ? `${bgStr}${secondary.main} 80%)` : `${bgStr}${primary.dark})`;

  const HeaderWrap = {
    background: background,
    fallbacks: [
      {
        background: primary.main,
      },
    ],
    borderBottomLeftRadius: "50%",
    borderBottomRightRadius: "50%",
    height: "40%",
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    width: "100%",
    transform: "scale(1.5, 1)",
  };

  return (
    <Grid container>
      <Grid item xs={12} textAlign="center" sx={{ position: "relative" }}>
          <Box sx={HeaderWrap}></Box>
        <HeaderImage id={id} />
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
