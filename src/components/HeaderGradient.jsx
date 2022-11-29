import { Box, Fade } from "@mui/material";

const HeaderGradient = (props) => {
  //  Props
  const { active, firstColor, secondColor } = props;

  const HeaderWrap = {
    background: `linear-gradient(180deg, ${firstColor} 0%,${secondColor} 80%)`,
    fallbacks: [
      {
        background: firstColor,
      },
    ],
    borderBottomLeftRadius: "50%",
    borderBottomRightRadius: "50%",
    height: "40%",
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    width: "100%",
    transform: "scale(1.5, 1)",
  };

  return (
    <Fade in={active} timeout={300}>
      <Box sx={HeaderWrap}></Box>
    </Fade>
  );
};

export default HeaderGradient;
