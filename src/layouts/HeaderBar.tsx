import { AppBar, Button, Grid2, Stack, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { AuthService } from "../services/AuthService";
import Cookies from "js-cookie";
const HeaderBar = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const logoClick = () => {
    navigate("/");
  };

  const loginClick = async () => {
    navigate("/login");
  };

  const logoutClick = async () => {
    logout();
    await AuthService.logout();
    localStorage.clear();
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
          <Button color='inherit' onClick={() => navigate("/sell")}>
            Sell
          </Button>
          <Button color='inherit' onClick={() => navigate("/buy")}>
            Buy
          </Button>
          <Button color='inherit' onClick={() => navigate("/admin")}>
            Admin
          </Button>
        </Grid2>
        <Grid2 container size={6} justifyContent='flex-end'>
          {isAuthenticated ? (
            <Button color='inherit' onClick={logoutClick}>
              Logout
            </Button>
          ) : (
            <Button color='inherit' onClick={loginClick}>
              Login
            </Button>
          )}
        </Grid2>
      </Grid2>
      {/* </Toolbar> */}
    </AppBar>
  );
};

export default HeaderBar;
