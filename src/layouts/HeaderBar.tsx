import { AppBar, Button, Grid2, Stack, Toolbar } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { AuthService } from "../services/AuthService";
import { menus } from "./memu";
import { useEffect, useState } from "react";
const HeaderBar = () => {
  const { isAuthenticated, logout, user } = useAuthStore();
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState();

  useEffect(() => {
    makeMenus();
  }, []);
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
  const makeMenus = () => {
    const list: any = [];
    menus.map((menu) => {
      if (menu.role == user?.role || !menu.role) {
        list.push(
          <Button color='inherit' onClick={() => navigate(menu.link)}>
            {menu.title}
          </Button>
        );
      }
    });
    setMenuData(list);
  };
  return (
    <AppBar position='static' style={{ width: "100%", padding: "10px 15px" }}>
      {/* <Toolbar style={{ width: "100%" }}> */}
      <Grid2 container alignItems='center' style={{ width: "100%" }}>
        <Grid2 container size={6} justifyContent='flex-start'>
          <Button color='inherit' onClick={logoClick}>
            Logo
          </Button>
          {menuData && menuData}
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
