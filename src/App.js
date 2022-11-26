import './App.css';
import Pokedex from './pages/Pokedex';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const id = useLocation().pathname.replace('/', '');

  const getId = (id) => id > 0 ? id : 1;


  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Pokedex id={getId(id)} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
