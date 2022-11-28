import { Container, Grid, CircularProgress, Box } from '@mui/material';
import { useContext, useEffect } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import Header from '../components/Header';
import Types from '../components/Types';
import Evolutions from '../components/Evolutions';
import BaseStats from '../components/BaseStats';
import GeneralInfo from '../components/GeneralInfo';
import NavBottom from '../components/NavBottom';
import { useNavContext } from '../contexts/NavContext';

const Pokedex = () => {
    const { isLoaded, id, nEvolves } = useContext(PokemonContext);
    const { setNavOption } = useNavContext();

    useEffect(() => { setNavOption(2) }, [id]);

    const ContainerStyles = {
        overflowX: 'hidden', justifyContent: "center", alignItems: "center", minWidth: '300px', flexGrow: 1
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Container maxWidth="md" sx={ContainerStyles}>
                {isLoaded ?
                    <>
                        <Header />
                        <Types />
                        <GeneralInfo />
                        {nEvolves > 1 && <Evolutions />}
                        <BaseStats />
                    </> :
                    <Grid container height='100vh' justifyContent='center' alignItems='center'>
                        <CircularProgress />
                    </Grid>
                }
            </Container>
            <NavBottom></NavBottom>
        </Box>
    )
}

export default Pokedex;