import { Box, Divider, Grid, Stack } from "@mui/material";
import React from "react";

function MuiLayout() {
  return (
    <>
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

      {/* grid has two variants, one for container and the other for it's items
          breakpoints - xs, sm, md, lg, xl
          follows 12 column grid
      */}

      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box border="1px solid" bgcolor="secondary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box border="1px solid" bgcolor="secondary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box border="1px solid" bgcolor="secondary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box border="1px solid" bgcolor="secondary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default MuiLayout;
