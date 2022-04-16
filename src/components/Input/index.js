import React from "react";
import TextField from "@mui/material/TextField";
const Input = ({value, change, label, name, type}) => {
  return (
    <TextField
      size="normal"
      type={type}
      value={value}
      onChange={change}
      id="outlined-required"
      label={label}
      name={name}
      style={{
        width: "100%",
      }}
    />
  );
};

export default Input;
