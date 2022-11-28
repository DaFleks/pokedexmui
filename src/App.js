import { CssBaseline, Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import NavBottom from './components/NavBottom';
import NavProvider from './contexts/NavContext';
import PokemonProvider from './contexts/PokemonContext';

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <NavProvider>
          <PokemonProvider>
            <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
              <Routes>
                {/* TODO: SEARCH */}
                <Route path="*" element={<Pokedex />}></Route>
                {/* TODO: SETTINGS */}
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
