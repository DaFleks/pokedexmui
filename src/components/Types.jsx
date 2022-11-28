import { Grid, Chip, Slide } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import capitalize from "../utils/captialize";
import { useContext } from "react";
import { usePokemonContext } from "../contexts/PokemonContext";

const Types = () => {
  const theme = useTheme();
  const { primary, secondary } = theme.palette;
  const { types, active } = usePokemonContext();

  const backgrounds = [
    `linear-gradient(180deg, ${primary.light} 0%, ${primary.main} 100%)`,
    `linear-gradient(180deg, ${secondary.light} 0%, ${secondary.main} 100%)`,
  ];

  const typeStyle = {
    fallbacks: [
      {
        background: primary.main,
      },
    ],
    color: "white",
    fontWeight: "bold",
    mx: 1,
    width: "25%",
  };

  return (
    //  Reason I used ? instead of &&, browser was giving me grief if length was 0 and nothing was passed in sx, temp fix
    <Grid item xs={12} textAlign="center" mb={3} sx={types.length > 1 ? { display: "flex", justifyContent: "center" } : {}}>
      {types.map((type, idx) => (
        <Slide in={active} timeout={300} direction={idx === 0 ? "left" : "right"}>
          <Chip key={idx} label={capitalize(type.type.name)} sx={{ ...typeStyle, ...{ background: backgrounds[idx] } }}></Chip>
        </Slide>
      ))}
    </Grid>
  );
};

export default Types;
