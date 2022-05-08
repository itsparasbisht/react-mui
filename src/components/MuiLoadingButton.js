import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import React from "react";

function MuiLoadingButton() {
  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton>Submit</LoadingButton>
      <LoadingButton variant="contained" loading>
        Submit
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="Loading..." loading>
        Fetch data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<Save />}
      >
        Save
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<Save />}
        loading
      >
        Save
      </LoadingButton>
    </Stack>
  );
}

export default MuiLoadingButton;
