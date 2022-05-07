import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import React, { useState } from "react";

function MuiChip() {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);

  const handleDelete = (chipToDelete) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack direction="row" m={4} spacing={1}>
      <Chip label="Chip" color="primary" size="small" icon={<Face />} />
      <Chip
        label="Chip Outlined"
        color="secondary"
        variant="outlined"
        avatar={<Avatar>P</Avatar>}
      />
      <Chip
        label="click"
        color="success"
        onClick={() => alert("clicked")}
      ></Chip>
      <Chip
        label="delete"
        color="error"
        onClick={() => alert("clicked")}
        onDelete={() => alert("delete handler called")}
      ></Chip>
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          onDelete={() => handleDelete(chip)}
        ></Chip>
      ))}
    </Stack>
  );
}

export default MuiChip;
