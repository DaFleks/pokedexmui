import { useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { usePokemonContext } from "../contexts/PokemonContext";
import * as typeColors from '../data/typeColors.json';

const usePokemonTheme = () => {
  // State
  const [theme, setTheme] = useState(createTheme());
  const [colors, setColors] = useState();

  // Context
  const { isLoaded, types, id } = usePokemonContext();

  // Effects
  useEffect(() => {
    if (isLoaded) {
      setColors([typeColors[types[0].type.name], types[1] ? typeColors[types[1].type.name] : ""]);
    }
  }, [id]);

  useEffect(() => {
    if (colors) {
      const theme = createTheme({
        palette: {
          primary: {
            main: colors[0],
          },
          ...(types[1] && {
            secondary: {
              main: colors[1],
            },
          }),
        },
        typography: {
          fontFamily: ["Montserrat", "san-serif"].join(","),
        },
      });
      setTheme(theme);
    }
  }, [ colors]);

  return [theme];
};

export default usePokemonTheme;
