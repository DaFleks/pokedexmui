import './App.css';
import Pokedex from './pages/Pokedex';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const id = useLocation().pathname.replace('/', '');
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Pokedex id={id} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
