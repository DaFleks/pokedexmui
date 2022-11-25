import { Grid, Stack, Divider, Box, Typography } from '@mui/material';
import { getFeet, getPounds } from '../utils/converters';

const GeneralInfo = (props) => {
  const { height, weight } = props;

  return (
    <Grid item xs={12} mb={3}>
      <Stack justifyContent='center' direction='row' textAlign='center' divider={<Divider orientation='vertical' flexItem></Divider>}>
        <Box mx={7}>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            Height
          </Typography>
          <Typography variant='p'>{getFeet(height)}</Typography>
        </Box>
        <Box mx={7}>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            Weight
          </Typography>
          <Typography variant='p'>{getPounds(weight)}</Typography>
        </Box>
      </Stack>
    </Grid>
  );
};

export default GeneralInfo;
