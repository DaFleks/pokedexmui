import { usePokemonContext } from "../contexts/PokemonContext";
import { useNavigate } from "react-router-dom";

const useChangePokemon = () => {
  const { active, setActive, setIsLoaded } = usePokemonContext();
  const navigate = useNavigate();

  const changePokemon = (id) => {
    setActive(!active);

    setTimeout(() => {
      setIsLoaded(false);
      navigate(`/${id}`);
    }, 300);
  };

  return [changePokemon];
};

export default useChangePokemon;
