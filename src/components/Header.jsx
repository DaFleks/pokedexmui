import { Grid, Typography, Box, Zoom } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import capitalize from "../utils/captialize";
import padZeroes from "../utils/padZeroes";

const Header = (props) => {
  const theme = useTheme();
  const { primary, secondary } = theme.palette;
  const { id, name, numTypes } = props;

  const bgStr = `linear-gradient(180deg, ${primary.main} 0%,`;
  const background = numTypes > 1 ? `${bgStr}${secondary.main} 80%)` : `${bgStr}${primary.dark})`;
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;

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

  const navStyle = {
    zIndex: 2,
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    fontWeight: "700",
    zIndex: 1000,
  };

  return (
    <Grid container>
      <Grid item xs={12} textAlign="center" sx={{ position: "relative" }}>
        <Box sx={HeaderWrap}></Box>
        <Box width="100%" mt={1} sx={navStyle}>
          <Typography variant="h6">
            <Link style={{ color: "white", textDecoration: "none" }} to={`/${id - 1}`}>
              {`< ${padZeroes(id - 1)}`}
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link style={{ color: "white", textDecoration: "none" }} to={`/${id + 1}`}>
              {`${padZeroes(id + 1)} >`}
            </Link>
          </Typography>
        </Box>
        <Zoom in={true} timeout={300}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2, position: "relative" }}>
            <img src={`${imgUrl}${id}.png`} alt={name} width="60%" />
          </Box>
        </Zoom>
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
