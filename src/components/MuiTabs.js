import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function MuiTabs() {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="tab 1" {...a11yProps(0)} />
          <Tab label="tab 2" {...a11yProps(0)} />
          <Tab label="tab 3" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Panel 1
      </TabPanel>
      <TabPanel value={value} index={1}>
        Panel 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Panel 3
      </TabPanel>
    </Box>
  );
}

export default MuiTabs;
