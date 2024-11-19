import React from "react";
import LoginPage from "../pages/login/LoginPage";
import { useAuthStore } from "../store/useAuthStore";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthRouter = ({ redirectPath = "/", children, hasRole }: any) => {
  const { isAuthenticated, user } = useAuthStore();
  const redirectNavigate = <Navigate to={redirectPath} replace />;

  const role = user?.role;

  // 권한 없는 페이지에 들어가면 무조건 자식반환
  if (!hasRole) {
    return children;
  }

  // 로그인 하지 않은 상태에서 권한이 필요한 페이지 접근 시 리다이렉트
  if (!isAuthenticated) {
    return redirectNavigate;
  }

  // 권한이 필요한 페이지에서 권한이 맞지 않으면 리다이렉트
  if (role !== hasRole) {
    return redirectNavigate;
  }

  // 기본적으로 권한이 맞으면 자식 반환
  return children;
};

export default AuthRouter;
