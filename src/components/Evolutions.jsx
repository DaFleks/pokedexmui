import { Grid, Typography } from "@mui/material";
import * as typeColors from "../data/typeColors.json";
import capitalize from "../utils/captialize";
import padZeroes from "../utils/padZeroes";

const Evolutions = (props) => {
  const { evolutionData } = props;
  const type = props.types[0].type.name;

  const evoLvStyle = {
    fontSize: "0.7rem",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: typeColors[type],
  };

  const evoNameStyle = { fontSize: "1.0rem" };
  const evoNumStyle = { fontSize: "0.7rem" };

  return (
    <>
      <Grid container justifyContent={evolutionData.length > 1 ? "center" : "space-between"} mb={1}>
        {evolutionData.map((pk, idx) => (
          <>
            {idx !== 0 && (
              <Grid item xs={1} textAlign="center" sx={evoLvStyle}>
                <Typography variant="p">Level</Typography>
                <Typography variant="p">{pk.level}</Typography>
              </Grid>
            )}
            <Grid item xs={3}>
              <img src={pk.image} alt={pk.name} width="100%" />
            </Grid>
          </>
        ))}
      </Grid>
      <Grid container textAlign="center" color={typeColors[type]}>
        {evolutionData.map((pk, idx) => (
          <Grid item xs={4} sx={idx !== 2 && { borderRight: `1px solid ${typeColors[type]}` }}>
            <Typography variant="h6" sx={evoNameStyle}>
              {capitalize(pk.name)}
            </Typography>
            <Typography variant="h6" color="grey" sx={evoNumStyle}>
              {padZeroes(pk.id)}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Evolutions;
