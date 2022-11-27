import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "../contexts/PokemonContext";
import { useContext } from "react";

const NavBottom = () => {
  const { id } = useContext(PokemonContext);
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3} sx={{ position: "sticky", bottom: 0, overflow: "hidden", borderRadius: "0" }}>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction icon={<SearchIcon />}></BottomNavigationAction>
        <BottomNavigationAction component={Link} to={`/${id - 1}`} icon={<ArrowLeftIcon />}></BottomNavigationAction>
        <BottomNavigationAction icon={<CatchingPokemonIcon />}></BottomNavigationAction>
        <BottomNavigationAction component={Link} to={`/${id + 1}`} icon={<ArrowRightIcon />}></BottomNavigationAction>
        <BottomNavigationAction icon={<SettingsIcon />}></BottomNavigationAction>
      </BottomNavigation>
    </Paper>
  );
};

export default NavBottom;
