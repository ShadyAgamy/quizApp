import React from "react";
import { Typography } from "@mui/material";
const InputError = ({errorText}) => {
  return (
    <Typography
      sx={{ mb: 2 }}
      color="red"
      variant="overline"
      display="block"
      gutterBottom
      style={{
        textAlign: "left",
      }}
    >
        {errorText}
    </Typography>
  );
};

export default InputError;
