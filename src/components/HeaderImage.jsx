import { Box, Zoom } from "@mui/material";
import { useEffect, useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const HeaderImage = () => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;
  const { id, active, setActive } = useContext(PokemonContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!active) setActive(true);
      clearTimeout(timeout);
    }, 300);
  }, [id]);

  return (
    <Zoom in={active} timeout={300}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2, position: "relative" }}>
        <img src={`${imgUrl}${id}.png`} alt={"test"} width="60%" />
      </Box>
    </Zoom>
  );
};

export default HeaderImage;
