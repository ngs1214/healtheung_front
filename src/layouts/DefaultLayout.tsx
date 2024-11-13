import { Container, Grid2 as Grid, Paper } from "@mui/material";

import { Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar";

const DefaultLayout = () => {
  return (
    <Container maxWidth={false} style={{ padding: 0 }}>
      <HeaderBar />
      <Paper style={{ padding: "20px", height: "calc(100vh - 64px)" }}>
        {/* 64px는 AppBar의 기본 높이입니다. */}
        <Outlet />
      </Paper>
    </Container>
  );
};

export default DefaultLayout;
