import { Card, Typography } from "@mui/material";
import React from "react";

const myCard = {
  borderRadius: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function MuiResponsive() {
  return (
    <Card
      className="myCard"
      sx={{
        height: "300px",
        width: {
          xs: 100, // above 0px
          sm: 200, // above 600px
          md: 300, // above 900px
          lg: 400, // above 1200px
          xl: 500, // above 1536px
        },
        ...myCard,
      }}
      elevation={4}
    >
      <Typography variant="h5" color="blue">
        MUI it is!
      </Typography>
    </Card>
  );
}

export default MuiResponsive;
