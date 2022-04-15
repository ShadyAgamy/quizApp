import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography, Grid,Button } from "@mui/material";

import { useDispatch} from "react-redux";
import {login} from "../../redux/actions";

import "./styles.scss";

const LogIn = () => {
  const dispatch = useDispatch()
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await sleep(300);
     setFormErrors(validate(formValues));
     setIsSubmit(true);
    
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        dispatch(login(formValues))
   }
  
  }, [dispatch, formErrors, formValues, isSubmit]);

  //function to validate the error
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Box
        component="form"
        sx={{
          margin: 0,
          width: "100%",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            size="normal"
            value={formValues.username}
            onChange={handleChange}
            id="outlined-required"
            label="Name"
            name="username"
            style={{
              width: "100%",
            }}
          />
          <Typography
            sx={{ mb: 2 }}
            color="red"
            variant="overline"
            display="block"
            gutterBottom
            style={{
              textAlign: "left"
            }}
          >
            {formErrors.username}
          </Typography>
          <TextField
            size="normal"
            className="inpsdsdut"
            id="outlined-required"
            label="Email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            name="email"
            style={{
              width: "100%",
            }}
          />
          <Typography
            sx={{ mb: 2 }}
            className="input"
            color="red"
            variant="overline"
            display="block"
            gutterBottom
            style={{
              textAlign: "left"
            }}
          >
            {formErrors.email}
          </Typography>
          <TextField
            size="normal"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={formValues.password}
            onChange={handleChange}
            name="password"
            style={{
              width: "100%",
            }}
          />
          <Typography
            sx={{ mb: 2 }}
            color="red"
            variant="overline"
            display="block"
            gutterBottom
            style={{
              textAlign: "left"
            }}
          >
            {formErrors.password}
          </Typography>
          <Button type="submit" variant="contained">Submit</Button>
        </div>
      </Box>
    </Grid>
  );
};

export default LogIn;
