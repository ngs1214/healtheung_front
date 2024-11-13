import { AppBar, Button, Grid2, Stack, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const HeaderBar = () => {
  const navigate = useNavigate();

  const logoClick = () => {
    navigate("/");
  };
  const itemClick = () => {
    navigate("/item");
  };

  const loginClick = () => {
    navigate("/login");
  };
  return (
    <AppBar position='static' style={{ width: "100%", padding: "10px 15px" }}>
      {/* <Toolbar style={{ width: "100%" }}> */}
      <Grid2 container alignItems='center' style={{ width: "100%" }}>
        <Grid2 container size={6} justifyContent='flex-start'>
          <Button color='inherit' onClick={logoClick}>
            Logo
          </Button>
          <Button color='inherit' onClick={itemClick}>
            item
          </Button>
        </Grid2>
        <Grid2 container size={6} justifyContent='flex-end'>
          <Button color='inherit' onClick={loginClick}>
            Login
          </Button>
        </Grid2>
      </Grid2>
      {/* </Toolbar> */}
    </AppBar>
  );
};

export default HeaderBar;
