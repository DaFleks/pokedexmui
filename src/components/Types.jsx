import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { usePokemonContext } from "../contexts/PokemonContext";
import Type from "./Type";

const Types = () => {
  //  Colors
  const { primary, secondary } = useTheme().palette;

  //  Context
  const { types, active } = usePokemonContext();

  return (
    <Grid item xs={12} mb={3} sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      {types.map((type, idx) => (
        <Type
          key={idx}
          active={active}
          direction={idx === 0 ? "left" : "right"}
          name={type.type.name}
          firstColor={idx === 0 ? primary.main : secondary.main}
          secondColor={idx === 0 ? primary.dark : secondary.dark}
        />
      ))}
    </Grid>
  );
};

export default Types;
