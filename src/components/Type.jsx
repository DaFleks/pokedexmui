import { Chip, Slide } from "@mui/material";
import { capitalize } from "../utils/utilities";

const Type = (props) => {
  //  Props
  const { active, direction, name, firstColor, secondColor } = props;

  //  Style
  const typeStyle = {
    background: `linear-gradient(180deg, ${firstColor} 0%, ${secondColor} 100%)`,
    fallbacks: [
      {
        background: firstColor,
      },
    ],
    color: "white",
    fontWeight: "bold",
    mx: 1,
    minWidth: "25%",
  };

  return (
    <Slide in={active} timeout={300} direction={direction}>
      <Chip label={capitalize(name)} sx={typeStyle}></Chip>
    </Slide>
  );
};

export default Type;
