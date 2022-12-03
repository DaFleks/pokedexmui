import { Container, Grid, Typography } from "@mui/material";
import { List, Divider, Switch } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import InfoIcon from "@mui/icons-material/Info";
import SupportIcon from "@mui/icons-material/Support";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsItem from "../components/SettingsItem";

const Settings = () => {
  return (
    <Container maxWidth="md" sx={{ flexGrow: 1, py: 2, mb: 7 }}>
      <Grid container>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
          <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
          <Typography ml={2} variant="h6">
            Settings
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <List>
            <SettingsItem icon={<InfoIcon />} text="About" />
            <Divider></Divider>
            <SettingsItem icon={<SupportIcon />} text="Help" />
            <Divider></Divider>
            <SettingsItem icon={<DarkModeIcon />} text="Dark Mode" switchBtn={<Switch label="Dark Mode"/>}/>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Settings;
