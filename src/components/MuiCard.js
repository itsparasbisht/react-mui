import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

function MuiCard() {
  return (
    <Box width="300px">
      <Card elevation={7}>
        <CardMedia
          component="img"
          height="140px"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="text.secondary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            numquam harum voluptates magni dolorum suscipit omnis necessitatibus
            quos aliquam doloremque.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MuiCard;
