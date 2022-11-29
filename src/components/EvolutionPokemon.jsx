import { Divider, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { capitalize, padZeroes } from "../utils/utilities";

const EvolutionPokemon = (props) => {
  //  Props
  const { level, image, name, id } = props;

  //  Theme
  const theme = useTheme();
  const { primary } = theme.palette;

  //  Styles
  const dividerStyle = { color: primary.dark, fontWeight: "bold", fontSize: "0.75rem" };
  const pokemonStyle = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontWeight: "bold" };

  return (
    <>
      {
        // If the evolution method is not a trade/item and it's level-based.
        level && (
          <Divider sx={dividerStyle} orientation="vertical" flexItem>
            {isNaN(level) ? capitalize(level) : `Lv.${level}`}
          </Divider>
        )
      }
      <Box sx={pokemonStyle}>
        <img src={image} alt={capitalize(name)} width="100%" />
        <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
          {capitalize(name)}
        </Typography>
        <Typography variant="p" sx={{ fontSize: "0.75rem", color: "grey" }}>
          {padZeroes(id)}
        </Typography>
      </Box>
    </>
  );
};

export default EvolutionPokemon;
