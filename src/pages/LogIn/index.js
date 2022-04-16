import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Grid, Button, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";
import Input from "../../components/Input";
import InputError from "../../components/InputError";

import "./styles.scss";

const LogIn = () => {
  const dispatch = useDispatch();
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sleep(300);
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dispatch(login(formValues));
    }
  }, [dispatch, formErrors, formValues, isSubmit]);

  // validate the Inputs
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
    <Container maxWidth="sm">
      <Box textAlign="center">
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
            <div className="logIn_container">
              <Input
                value={formValues.username}
                change={handleChange}
                label="Name"
                name="username"
                type="text"
              />
              <InputError errorText={formErrors.username} />
              <Input
                value={formValues.email}
                change={handleChange}
                label="Email"
                name="email"
                type="email"
              />
              <InputError errorText={formErrors.email} />
              <Input
                value={formValues.password}
                change={handleChange}
                label="Password"
                name="password"
                type="password"
              />
              <InputError errorText={formErrors.password} />
              <Button className="logIn_btn" type="submit" variant="contained">
                Submit
              </Button>
            </div>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default LogIn;
