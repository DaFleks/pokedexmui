import { Grid, Typography, Stack, Box, Divider, Zoom } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import capitalize from "../utils/captialize";
import padZeroes from "../utils/padZeroes";

const Evolutions = (props) => {
  const theme = useTheme();
  const { primary } = theme.palette;

  const { evolutionData } = props;

  //  Styles
  const dividerStyle = { color: primary.dark, fontWeight: "bold", fontSize: "0.75rem" };
  const pokemonStyle = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontWeight: "bold" };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }} textAlign="center" mb={2}>
          Evolution
        </Typography>
        <Stack direction="row">
          {evolutionData.map((pk) => (
            <>
              {pk.level > 1 && (
                <Divider sx={dividerStyle} orientation="vertical" flexItem>
                  Lv. {pk.level}
                </Divider>
              )}
              <Zoom in={true} timeout={500}>
                <Box sx={pokemonStyle}>
                  <img src={pk.image} alt={capitalize(pk.name)} width="100%" />
                  <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                    {capitalize(pk.name)}
                  </Typography>
                  <Typography variant="p" sx={{ fontSize: "0.75rem", color: "grey" }}>
                    {padZeroes(pk.id)}
                  </Typography>
                </Box>
              </Zoom>
            </>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Evolutions;
