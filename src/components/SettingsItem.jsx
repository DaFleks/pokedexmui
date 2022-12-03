import { ListItem, ListItemButton, ListItemText } from "@mui/material";

const SettingsItem = (props) => {
  //  Props
  const { icon, text, switchBtn } = props;

  return (
    <ListItem disablePadding>
      <ListItemButton sx={{ p: 0, py: 1 }}>
        {props.icon}
        <ListItemText primary={props.text} sx={{ ml: 1 }}></ListItemText>
        {switchBtn && switchBtn}
      </ListItemButton>
    </ListItem>
  );
};

export default SettingsItem;
