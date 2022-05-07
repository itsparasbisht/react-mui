import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import React from "react";

function MuiBadge() {
  return (
    <Stack spacing={2} m={4} direction="row">
      <Badge badgeContent={5} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={105} color="success">
        <Mail />
      </Badge>
      <Badge badgeContent={105} color="secondary" max={999}>
        <Mail />
      </Badge>
      <Badge variant="dot" color="primary">
        <Mail />
      </Badge>
      <Badge variant="dot" color="primary" invisible={true}>
        <Mail />
      </Badge>
    </Stack>
  );
}

export default MuiBadge;
