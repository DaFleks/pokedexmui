import './App.css';
import { CssBaseline } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavProvider from './contexts/NavContext';
import Pokedex from './pages/Pokedex';
import { Route, Routes } from 'react-router-dom';
import { PokemonContext } from './contexts/PokemonContext';
import * as typeColors from './data/typeColors.json';

function App() {
  const [theme, setTheme] = useState(createTheme());
  const { isLoaded, types } = useContext(PokemonContext);
  const [colors, setColors] = useState();

  useEffect(() => {
    if (isLoaded, types) {
      setColors([typeColors[types[0].type.name], types[1] ? typeColors[types[1].type.name] : '']);
    };
  }, [isLoaded, types])

  useEffect(() => {
    if (colors) {
      const theme = createTheme({
        palette: {
          primary: {
            main: colors[0]
          },
          ...(types[1] && {
            secondary: {
              main: colors[1]
            }
          }),
        },
        typography: {
          fontFamily: [
            'Montserrat',
            'san-serif'
          ].join(',')
        }
      })
      setTheme(theme);
    }

  }, [colors]);

  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <NavProvider>
          <div className="App">
            <Routes>
              <Route path="*" element={<Pokedex />}></Route>
            </Routes>
          </div>
        </NavProvider>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
