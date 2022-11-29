import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { usePokemonContext } from "../contexts/PokemonContext";
import HeaderGradient from "../components/HeaderGradient";
import HeaderImage from "./HeaderImage";
import HeaderText from "./HeaderText";

const Header = () => {
  //  Context
  const { id, types, active, name } = usePokemonContext();

  //  Grab colors from theme to use in Gradient.
  const { primary, secondary } = useTheme().palette;

  return (
    <Grid container>
      <Grid item xs={12} textAlign="center" sx={{ position: "relative" }}>
        <HeaderGradient
          active={active}
          firstColor={primary.main}
          secondColor={types.length > 1 ? secondary.main : primary.dark}
        />
        <HeaderImage active={active} id={id} />
        <HeaderText active={active} id={id} name={name} />
      </Grid>
    </Grid>
  );
};

export default Header;
