import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function MuiRating() {
  const [value, setValue] = useState();
  console.log(value);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </div>
  );
}

export default MuiRating;
