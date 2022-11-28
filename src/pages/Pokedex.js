import { useEffect } from 'react';
import { Container, Grid, CircularProgress } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import usePokemonTheme from '../hooks/usePokemonTheme';
import { usePokemonContext } from '../contexts/PokemonContext';
import { useNavContext } from '../contexts/NavContext';
import Header from '../components/Header';
import Types from '../components/Types';
import Evolutions from '../components/Evolutions';
import BaseStats from '../components/BaseStats';
import HeightWeight from '../components/HeightWeight';

const Pokedex = () => {
    // Hooks
    const [theme] = usePokemonTheme();

    // Context
    const { isLoaded, id, nEvolves, active, setActive } = usePokemonContext();
    const { setNavOption } = useNavContext();

    // Effects
    useEffect(() => {
        //  Whenever Pokedex is rendered, put the Pokeball nav option active.
        setNavOption(2)

        //  If transitions are not active, activate them after 300ms (waiting for exit transition to finish).
        setTimeout(() => {
            !active && setActive(true);
        }, 300);
    }, [id]);

    // Styles
    const ContainerStyles = {
        overflowX: 'hidden', justifyContent: "center", alignItems: "center", minWidth: '300px', flexGrow: 1,
    }

    return (
        <ThemeProvider theme={theme}>
                <Container maxWidth="xs" sx={ContainerStyles}>
                    {isLoaded ?
                        <>
                            <Header />
                            <Types />
                            <HeightWeight />
                            {nEvolves > 1 && <Evolutions />}
                            <BaseStats />
                        </> :
                        <Grid container minHeight="100vh" justifyContent='center' alignItems='center'>
                            <CircularProgress />
                        </Grid>
                    }
                </Container>
        </ThemeProvider>
    )
}

export default Pokedex;