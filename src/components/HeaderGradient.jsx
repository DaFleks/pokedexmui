import { Box, Fade } from "@mui/material";

const HeaderGradient = (props) => {
  //  Props
  const { active,nTypes, primary, secondary } = props;

  //  String to set the linear-gradient for the header background color(s),
  //  if the Pokemon has 1 type, it's a combo of the single type color with a darker done,
  //  if the pokemon has 2 types, the gradient is a combo of both type colors.
  const bgStr = `linear-gradient(180deg, ${primary.main} 0%,`;
  
  const HeaderWrap = {
    background: nTypes > 1 ? `${bgStr}${secondary.main} 80%)` : `${bgStr}${primary.dark})`,
    fallbacks: [
      {
        background: primary.main,
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
