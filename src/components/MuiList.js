import { Mail } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

function MuiList() {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }} m={4}>
      <List>
        <ListItemButton>
          <ListItem disablePadding>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="List Item 1" secondary="secondary text" />
          </ListItem>
        </ListItemButton>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Mail />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="List Item 2" secondary="secondary text" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Mail />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="List Item 3" secondary="secondary text" />
        </ListItem>
      </List>
    </Box>
  );
}

export default MuiList;
