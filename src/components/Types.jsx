import { Grid, Chip } from "@mui/material";
import * as typeColors from "../data/typeColors.json";
import capitalize from "../utils/captialize";
import newShade from "../utils/newShade";

const Types = (props) => {
  let typeStyleArr = [];

  const getTypeStyle = (colorName) => {
    return {
      background: `linear-gradient(180deg, ${typeColors[colorName]} 0%, ${newShade(
        typeColors[colorName],
        40
      )} 100%)`,
      fallbacks: [
        {
          background: typeColors[colorName],
        },
      ],
      color: "white",
      fontWeight: "bold",
      mx: 1,
    };
  };

  props.types.forEach((type) => {
    typeStyleArr.push(getTypeStyle(type.type.name));
  });

  return (
    <Grid item xs={12} textAlign="center" mb={3}>
      {props.types.map((type, idx) => (
        <Chip key={idx} label={capitalize(type.type.name)} sx={typeStyleArr[idx]}></Chip>
      ))}
    </Grid>
  );
};

export default Types;
