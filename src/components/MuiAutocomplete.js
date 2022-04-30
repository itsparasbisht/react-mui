import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

function MuiAutocomplete() {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next.js",
    "express.js",
  ];

  const skillsOptions = [
    {
      id: 1,
      label: "HTML",
    },
    {
      id: 2,
      label: "CSS",
    },
    {
      id: 3,
      label: "Javascript",
    },
    {
      id: 4,
      label: "React",
    },
    {
      id: 5,
      label: "Next.js",
    },
  ];

  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState(null);

  console.log(value);
  console.log(skill);

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        freeSolo
      />

      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(e, newValue) => setSkill(newValue)}
      />
    </Stack>
  );
}

export default MuiAutocomplete;
