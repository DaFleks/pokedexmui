import { Grid } from "@mui/material";
import HeaderGradient from "../components/HeaderGradient";
import HeaderImage from "./HeaderImage";
import HeaderText from "./HeaderText";

const Header = () => {
  return (
    <Grid container>
      <Grid item xs={12} textAlign="center" sx={{ position: "relative" }}>
        <HeaderGradient />
        <HeaderImage />
        <HeaderText />
      </Grid>
    </Grid>
  );
};

export default Header;