import { useEffect } from "react";
import { Container, CircularProgress } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import usePokemonTheme from "../hooks/usePokemonTheme";
import { usePokemonContext } from "../contexts/PokemonContext";
import { useNavContext } from "../contexts/NavContext";
import Header from "../components/Header";
import Types from "../components/Types";
import Evolutions from "../components/Evolutions";
import BaseStats from "../components/BaseStats";
import Biometrics from "../components/Biometrics";

const Pokedex = () => {
  // Hooks
  const [theme] = usePokemonTheme();

  // Context
  const { isLoaded, id, nEvolves, active, setActive } = usePokemonContext();
  const { setNavOption } = useNavContext();

  // Effects
  useEffect(() => {
    //  Whenever Pokedex is rendered, put the Pokeball nav option active.
    setNavOption(2);

    //  If transitions are not active, activate them after 300ms (waiting for exit transition to finish).
    setTimeout(() => {
      !active && setActive(true);
    }, 300);
  }, [id]);

  // Styles
  const ContainerStyles = {
    overflowX: "hidden",
    flexGrow: 1,
    background: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: isLoaded ? "" : "center",
    alignItems: isLoaded ? "" : "center",
    pb: 6,
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={ContainerStyles}>
        {isLoaded ? (
          <>
            <Header />
            <Types />
            <Biometrics />
            {nEvolves > 1 && <Evolutions />}
            <BaseStats />
          </>
        ) : (
          <CircularProgress />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Pokedex;
