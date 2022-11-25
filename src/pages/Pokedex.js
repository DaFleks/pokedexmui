import { CssBaseline, Container, Grid, CircularProgress, Fade } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Types from '../components/Types';
import Evolutions from '../components/Evolutions';
import BaseStats from '../components/BaseStats';
import GeneralInfo from '../components/GeneralInfo';
import usePokemon from '../hooks/usePokemon';
import * as typeColors from '../data/typeColors.json';

const Pokedex = (props) => {
    const { id } = props;
    const [pokemonData, evolutionData, isLoaded] = usePokemon(id);
    const [theme, setTheme] = useState(createTheme());

    useEffect(() => {
        if (isLoaded) {
            const theme = createTheme({
                palette: {
                    primary: {
                        main: typeColors[pokemonData.types[0].type.name]
                    },
                    ...(pokemonData.types[1] && {
                        secondary: { main: typeColors[pokemonData.types[1].type.name] }
                    }),
                },
                typography: {
                    fontFamily: [
                        'Montserrat',
                        'san-serif'
                    ].join(',')
                }
            })
            setTheme(theme);
        }
    }, [pokemonData]);


    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <Container maxWidth="md" sx={{ overflowX: 'hidden', justifyContent: "center", alignItems: "center", background: 'white', minWidth: '250px' }} >
                    {isLoaded ?
                        <>
                            <Header id={pokemonData.id} name={pokemonData.name} numTypes={pokemonData.types.length} />
                            <Types types={pokemonData.types} />
                            <GeneralInfo height={pokemonData.height} weight={pokemonData.weight} />
                            {evolutionData.length > 1 && <Evolutions evolutionData={evolutionData} />}
                            <BaseStats stats={pokemonData.stats} />
                        </> :
                        <Grid container height='100vh' justifyContent='center' alignItems='center'>
                            <CircularProgress />
                        </Grid>
                    }
                </Container>
            </ThemeProvider>
        </CssBaseline>
    )
}

export default Pokedex;