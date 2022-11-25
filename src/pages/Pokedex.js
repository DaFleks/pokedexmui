import { CssBaseline, Container, Grid, CircularProgress } from '@mui/material';
import Header from '../components/Header';
import Types from '../components/Types';
import Evolutions from '../components/Evolutions';
import BaseStats from '../components/BaseStats';
import GeneralInfo from '../components/GeneralInfo';
import usePokemon from '../hooks/usePokemon';

const Pokedex = (props) => {
    const { id } = props;
    const [pokemonData, evolutionData, isLoaded] = usePokemon(id);

    return (
        <CssBaseline>
            <Container maxWidth={"sm"} >
                {isLoaded ?
                    <>
                        <Header id={pokemonData.id} name={pokemonData.name} types={pokemonData.types} />
                        <Types types={pokemonData.types} />
                        <GeneralInfo height={pokemonData.height} weight={pokemonData.weight} />
                        {evolutionData.length > 1 && <Evolutions evolutionData={evolutionData} types={pokemonData.types} />}
                        <BaseStats stats={pokemonData.stats} types={pokemonData.types} />
                    </> :
                    <Grid container height="100vh" justifyContent="center" alignItems="center">
                        <CircularProgress />
                    </Grid>
                }
            </Container>
        </CssBaseline>
    )
}

export default Pokedex;