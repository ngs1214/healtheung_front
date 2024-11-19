import React from "react";
import LoginPage from "../pages/login/LoginPage";
import { useAuthStore } from "../store/useAuthStore";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthRouter = ({ redirectPath = "/login", children }: any) => {
  const { isAuthenticated } = useAuthStore();
  const redirectNavigate = <Navigate to={redirectPath} replace />;
  // const refreshToken = Cookies.get("refreshToken");
  // if (!isAuthenticated) {
  //   if (refreshToken) {
  //     // 새로고침 시 리다이렉트 하지 않음
  //     return children;
  //   } else {
  //     return redirectNavigate;
  //   }
  // }
  return children;
};

export default AuthRouter;
