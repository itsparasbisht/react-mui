import { DatePicker, DateTimePicker, TimePicker } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";

function MuiPicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  console.log(selectedDate);
  console.log(selectedTime?.toLocaleTimeString());
  console.log(selectedDateTime);

  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="date picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      />
      <TimePicker
        label="time picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedTime}
        onChange={(newValue) => {
          setSelectedTime(newValue);
        }}
      />
      <DateTimePicker
        label="date time picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDateTime}
        onChange={(newValue) => {
          setSelectedDateTime(newValue);
        }}
      />
    </Stack>
  );
}

export default MuiPicker;
