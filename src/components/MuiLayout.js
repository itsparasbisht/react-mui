import { Box, Divider, Stack } from "@mui/material";
import React from "react";

function MuiLayout() {
  return (
    <Stack
      sx={{ border: "1px solid" }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        //   component={"span"}
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        code evolution
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2} // multiple of 8px, here 16px
      ></Box>
    </Stack>
  );
}

export default MuiLayout;
