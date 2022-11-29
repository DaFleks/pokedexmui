import { Grid, Stack, Divider, Fade } from "@mui/material";
import { getFeet, getPounds } from "../utils/utilities";
import { usePokemonContext } from "../contexts/PokemonContext";
import Biometric from "./Biometric";

const Biometrics = () => {
  //  Context
  const { height, weight, active } = usePokemonContext();

  return (
    <Grid item xs={12} mb={3}>
      <Fade in={active} timeout={300}>
        <Stack justifyContent="center" direction="row" textAlign="center" divider={<Divider orientation="vertical" flexItem></Divider>}>
          <Biometric name={'Height'} value={getFeet(height)}/>
          <Biometric name={'Weight'} value={getPounds(weight)}/>
        </Stack>
      </Fade>
    </Grid>
  );
};

export default Biometrics;
