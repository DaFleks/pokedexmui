import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import SettingsIcon from "@mui/icons-material/Settings";
import { usePokemonContext } from "../contexts/PokemonContext";
import { useNavContext } from "../contexts/NavContext";
import useChangePokemon from "../hooks/useChangePokemon";

const NavBottom = () => {
  const { id } = usePokemonContext();
  const [changePokemon] = useChangePokemon();
  const { navOption, setNavOption } = useNavContext();

  const handleChange = (e, newValue) => {
    setNavOption(newValue);
  };

  return (
    <Paper elevation={3} sx={{ position: "sticky", bottom: 0, overflow: "hidden", borderRadius: "0" }}>
      <BottomNavigation
        value={navOption}
        onChange={handleChange}

      >
        <BottomNavigationAction icon={<SearchIcon />}></BottomNavigationAction>
        <BottomNavigationAction
          onClick={() => {
            changePokemon(id - 1);
          }}
          icon={<ArrowLeftIcon />}
        ></BottomNavigationAction>
        <BottomNavigationAction icon={<CatchingPokemonIcon />}></BottomNavigationAction>
        <BottomNavigationAction
          onClick={() => {
            changePokemon(id + 1);
          }}
          icon={<ArrowRightIcon />}
        ></BottomNavigationAction>
        <BottomNavigationAction icon={<SettingsIcon />}></BottomNavigationAction>
      </BottomNavigation>
    </Paper>
  );
};

export default NavBottom;
