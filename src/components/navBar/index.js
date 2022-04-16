import React from 'react';
import {  useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NavBar = () => {
    const { user} = useSelector((state) => state);
  return (
    <AppBar position="static">
    <Toolbar variant="dense">
      <Typography variant="h6" color="inherit" component="div">
       {user.username}
      </Typography>
    </Toolbar>
  </AppBar>
  )
}

export default NavBar