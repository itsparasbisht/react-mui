import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

function MuiAvatar() {
  return (
    <>
      <Stack direction="row" spacing={2} p={4}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        <Avatar sx={{ bgcolor: "error.light" }}>DK</Avatar>
      </Stack>
      <Stack direction="row" spacing={2} p={4}>
        <AvatarGroup max={3}>
          <Avatar
            src="https://randomuser.me/portraits/women/79.jpg"
            alt="jane doe"
          />
          <Avatar
            src="https://randomuser.me/portraits/women/55.jpg"
            alt="jane doe"
          />
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={2} p={4}>
        <Avatar
          sx={{ bgcolor: "primary.light", width: "60px", height: "60px" }}
        >
          BW
        </Avatar>
        <Avatar variant="square" sx={{ bgcolor: "success.light" }}>
          CK
        </Avatar>
        <Avatar variant="rounded" sx={{ bgcolor: "error.light" }}>
          DK
        </Avatar>
      </Stack>
    </>
  );
}

export default MuiAvatar;
