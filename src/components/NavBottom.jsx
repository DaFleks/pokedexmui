import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import SettingsIcon from "@mui/icons-material/Settings";
import { usePokemonContext } from "../contexts/PokemonContext";
import { useNavContext } from "../contexts/NavContext";
import useChangePokemon from "../hooks/useChangePokemon";
import { Link } from "react-router-dom";

const NavBottom = () => {
  const { id } = usePokemonContext();
  const [changePokemon] = useChangePokemon();
  const { navOption, setNavOption } = useNavContext();

  const handleChange = (e, newValue) => {
    setNavOption(newValue);
  };

  return (
    <Paper elevation={3} sx={{ position: "fixed", bottom: "0", width: "100%", overflow: "hidden", borderRadius: "0" }}>
      <BottomNavigation value={navOption} onChange={handleChange}>
        {/* Search */}
        <BottomNavigationAction component={Link} to="/search" icon={<SearchIcon />}></BottomNavigationAction>

        {/* Left */}
        <BottomNavigationAction
          onClick={() => {
            changePokemon(id - 1);
          }}
          icon={<ArrowLeftIcon />}
        ></BottomNavigationAction>

        {/* Current Pokemon */}
        <BottomNavigationAction onClick={() => changePokemon(id)} icon={<CatchingPokemonIcon />}></BottomNavigationAction>

        {/* Right */}
        <BottomNavigationAction
          onClick={() => {
            changePokemon(id + 1);
          }}
          icon={<ArrowRightIcon />}
        ></BottomNavigationAction>

        {/* Settings */}
        <BottomNavigationAction icon={<SettingsIcon />}></BottomNavigationAction>
      </BottomNavigation>
    </Paper>
  );
};

export default NavBottom;
