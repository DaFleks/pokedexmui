import { Box } from "@mui/material";
import { useState, useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const HeaderImage = () => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;
  const { id } = useContext(PokemonContext);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2, position: "relative" }}>
      <img src={`${imgUrl}${id}.png`} alt={"test"} width="60%" />
    </Box>
  );
};

export default HeaderImage;
