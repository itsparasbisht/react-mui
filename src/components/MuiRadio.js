import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";

function MuiRadio() {
    const [value, setValue] = useState("")
    console.log(value)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

  return (
    <Box>
      <FormControl error>
        <FormLabel id="demo-radio-buttons-group-label">Years of experience</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="0-2" control={<Radio color="secondary" />} label="0-2" />
          <FormControlLabel value="3-5" control={<Radio />} label="3-5" />
          <FormControlLabel value="6-10" control={<Radio />} label="6-10" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default MuiRadio;
