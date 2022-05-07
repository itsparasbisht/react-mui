import { Avatar, Skeleton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

function MuiSkeleton() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={256}
          height={144}
          animation="wave"
        />
      ) : (
        <img
          src="https://source.unsplash.com/random/256x144"
          alt="skeleton"
          width={256}
          height={144}
        />
      )}
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        ) : (
          <Avatar>P</Avatar>
        )}
        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton width="100%" animation="wave" />
              </Typography>
              <Typography variant="body2">
                <Skeleton width="100%" animation="wave" />
              </Typography>
            </>
          ) : (
            <Typography variant="body1" pl={2} pt={1}>
              React Mui Series
            </Typography>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

export default MuiSkeleton;
