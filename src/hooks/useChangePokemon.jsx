import { PokemonContext } from "../contexts/PokemonContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const useChangePokemon = () => {
  const { active, setActive } = useContext(PokemonContext);
  const navigate = useNavigate();

  const changePokemon = (id) => {
    setActive(!active);
    
    const timeout = setTimeout(()=>{
        navigate(`/${id}`);
        clearTimeout(timeout)
    },300)
  };

  return [changePokemon];
};

export default useChangePokemon;
