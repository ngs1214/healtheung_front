import React from "react";
import LoginPage from "../pages/login/LoginPage";
import { useAuthStore } from "../store/useAuthStore";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthRouter = ({
  isAnonymousPage = false,
  redirectPath = "/",
  children,
  hasRole,
}: any) => {
  const { isAuthenticated, user } = useAuthStore();
  const redirectNavigate = <Navigate to={redirectPath} replace />;

  const role = user?.role;

  // 로그인 하지 않은 상태에서 권한이 필요한 페이지 접근 시 리다이렉트
  if (!isAuthenticated) {
    return redirectNavigate;
  }

  // 권한 없는 페이지에 들어가면 로그인 상태라면 자식 반환
  if (isAnonymousPage) {
    return children;
  }

  // 권한이 필요한 페이지에서 권한이 맞지 않으면 리다이렉트
  if (hasRole && role !== hasRole) {
    return redirectNavigate;
  }

  // 기본적으로 권한이 맞으면 자식 반환
  return children;
};

export default AuthRouter;
