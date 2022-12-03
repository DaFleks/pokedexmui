import { CssBaseline, Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import NavBottom from './components/NavBottom';
import NavProvider from './contexts/NavContext';
import PokemonProvider from './contexts/PokemonContext';
import Pokedex from './pages/Pokedex';
import Search from './pages/Search';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <NavProvider>
          <PokemonProvider>
            <Box sx={{
              display: 'flex', flexDirection: 'column', minHeight: '100vh', minWidth: '300px'
            }}>
              <Routes>
                <Route path="/search" element={<Search />}></Route>
                <Route path="*" element={<Pokedex />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
              </Routes>
              <NavBottom />
            </Box>
          </PokemonProvider>
        </NavProvider>
      </CssBaseline>
    </div>
  );
}

export default App;
