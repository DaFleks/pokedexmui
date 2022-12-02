import { Box, Zoom } from "@mui/material";

const HeaderImage = (props) => {
  //  Props
  const { id, active } = props;

  //  Base Image URL for official artwork.
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;

  const imageStyle = { display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2, position: "relative" };

  return (
    <Zoom in={active} timeout={300}>
      <Box sx={imageStyle}>
        <img src={`${imgUrl}${id}.png`} alt={"test"} width="60%" />
      </Box>
    </Zoom>
  );
};

export default HeaderImage;
