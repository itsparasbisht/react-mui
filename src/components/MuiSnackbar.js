import { Button, Snackbar } from "@mui/material";
import React, { useState } from "react";

function MuiSnackbar() {
  const [open, setOpen] = useState();

  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        open={open}
        message="Form submitted successfully!"
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
    </>
  );
}

export default MuiSnackbar;
