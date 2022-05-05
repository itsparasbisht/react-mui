import { Link, Stack } from "@mui/material";
import React from "react";

function MuiLink() {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" variant="h5">
        Link
      </Link>
      <Link href="#" color="secondary" underline="hover">
        Secondary
      </Link>
    </Stack>
  );
}

export default MuiLink;
