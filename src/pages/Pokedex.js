import { CssBaseline, Container } from '@mui/material';
import Header from '../components/Header';
import Types from '../components/Types';
import Evolutions from '../components/Evolutions';
import usePokemon from '../hooks/usePokemon';

const Pokedex = (props) => {
    const [pokemonData, evolutionData, isLoaded] = usePokemon(props.id);
    const PokedexStyle = {
        fontFamily: `"Montserrat", "sans-serif"`
    }
    return (
        <>
            <CssBaseline>
                <Container maxWidth={"sm"} sx={{ PokedexStyle }}>
                    {isLoaded ?
                        <>
                            <Header id={pokemonData.id} name={pokemonData.name} types={pokemonData.types} />
                            <Types types={pokemonData.types} />
                            <Evolutions evolutionData={evolutionData} types={pokemonData.types} />
                        </> :
                        ''}
                </Container>
            </CssBaseline>
        </>
    )
}

export default Pokedex;