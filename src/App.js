import { CssBaseline } from '@mui/material';
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
            <Routes>
              {/* TODO: SEARCH */}
              <Route path="*" element={<Pokedex />}></Route>
              {/* TODO: SETTINGS */}
            </Routes>
            <NavBottom />
          </PokemonProvider>
        </NavProvider>
      </CssBaseline>
    </div>
  );
}

export default App;
