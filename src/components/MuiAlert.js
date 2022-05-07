import { Check } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import React, { useState } from "react";

function MuiAlert() {
  const [hide, setHide] = useState(false);
  return (
    <Stack spacing={2}>
      {!hide && (
        <Alert severity="error" variant="filled" onClose={() => setHide(true)}>
          <AlertTitle>Error</AlertTitle>
          This is an error
        </Alert>
      )}
      <Alert
        severity="success"
        variant="filled"
        icon={<Check />}
        onClose={() => alert("closed")}
        action={<Button color="inherit">undo</Button>}
      >
        <AlertTitle>Error</AlertTitle>
        This is an error
      </Alert>
    </Stack>
  );
}

export default MuiAlert;
