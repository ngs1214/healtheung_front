import { useNavigate } from "react-router-dom";
import "./App.css";
import DefaultRouter from "./routers/DefaultRouter";
import { useAuthStore } from "./store/useAuthStore";
import LoginRouter from "./routers/LoginRouter";
import dayjs from "dayjs";
import { AuthService } from "./services/AuthService";
import Cookies from "js-cookie";
function App() {
  const { isAuthenticated, login, logout, user } = useAuthStore();
  const navigate = useNavigate();
  const now = dayjs(new Date()).valueOf();

  const reissue = () => {
    if (isAuthenticated) {
      if (Number(user?.exp) < now) {
        const refresh = Cookies.get("refresh");
        if (refresh) {
        } else {
        }
        AuthService.logout();
        logout();
      }
    } else {
    }
  };

  return <DefaultRouter />;
}

export default App;
