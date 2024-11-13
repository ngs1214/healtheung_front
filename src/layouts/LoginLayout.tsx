import React from "react";
import LoginPage from "../pages/login/LoginPage";
import { Container } from "@mui/material";

const LoginLayout = () => {
  return (
    <Container maxWidth={false} style={{ padding: 0, height: "100vh" }}>
      <LoginPage />
    </Container>
  );
};

export default LoginLayout;
