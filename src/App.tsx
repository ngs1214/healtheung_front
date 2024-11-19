import { useNavigate } from "react-router-dom";
import "./App.css";
import DefaultRouter from "./routers/DefaultRouter";
import { User, useAuthStore } from "./store/useAuthStore";
import LoginRouter from "./routers/AuthRouter";
import dayjs from "dayjs";
import { AuthService } from "./services/AuthService";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import LoginPage from "./pages/login/LoginPage";

function App() {
  const { isAuthenticated, login, logout, user } = useAuthStore();
  const navigate = useNavigate();
  // const now = dayjs(new Date()).valueOf();
  const now = dayjs().unix();

  //새로고침시 zustnad 초기화 되기에 기존accessToken 가져와
  //zustand 재등록
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      try {
        const decodedToken: User = jwtDecode(accessToken);
        if (decodedToken.exp > now) {
          login({
            userId: decodedToken.userId,
            role: decodedToken.role,
            exp: decodedToken.exp,
          });
        } else {
          refreshToken();
        }
      } catch (error) {
        console.error("Token decoding error:", error);
        logoutHandler();
      }
    } else {
      //Oauth2로그인
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get("access"); // 쿼리 파라미터에서 토큰을 읽음
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken); // 로
      }
    }
  }, []);

  const logoutHandler = async () => {
    logout();
    await AuthService.logout();
    localStorage.clear();
    navigate("/login");
  };

  const refreshToken = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      await AuthService.refresh()
        .then((res) => {
          const token = res.headers["authorization"];
          const accessToken = token?.replace("Bearer ", "");
          localStorage.setItem("accessToken", accessToken);
          // 디코딩 및 처리
          const decodedToken: User = jwtDecode(accessToken);
          login({
            userId: decodedToken.userId,
            role: decodedToken.role,
            exp: decodedToken.exp,
          });
        })
        .catch((e) => {
          console.log(e);
          logoutHandler();
        });
    } else {
      logoutHandler();
    }
  };

  return <>{isAuthenticated ? <DefaultRouter /> : <LoginPage />}</>;
}

export default App;
