import { DateRangePicker } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

function MuiDateRange() {
  const [value, setValue] = useState([null, null]);
  console.log(value);
  return (
    <Box width="500px">
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </Box>
  );
}

export default MuiDateRange;
