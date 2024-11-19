import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./LoginPage.module.css";
import google_icon from "./../../assets/images/google_icon.png";
import naver_icon from "./../../assets/images/naver_icon.png";
import { AuthService } from "../../services/AuthService";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

const LoginPage = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginHandle = async () => {
    const loginData = {
      userId: userId,
      password: password,
    };

    await AuthService.login(loginData)
      .then((res) => {
        console.log(res);
        const token = res.headers["authorization"];
        console.log(token);

        // 'Bearer '를 제거하고 실제 토큰만 저장
        const accessToken = token?.replace("Bearer ", "");
        localStorage.setItem("accessToken", accessToken);

        // 디코딩 및 처리
        const decodedToken = jwtDecode(accessToken);

        login({
          userId: decodedToken.userId,
          role: decodedToken.role,
          exp: decodedToken.exp,
        });
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Box className={styles.container}>
      <Box sx={{}}>
        <Stack>
          <Typography>일반로그인</Typography>
          <TextField
            id='userId'
            label='Id'
            variant='outlined'
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <TextField
            id='password'
            type='password'
            label='Password'
            variant='outlined'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Box>
            <FormControlLabel control={<Checkbox />} label='아이디 기억' />
          </Box>
          <Box className={styles.buttons}>
            <Button className={styles.button} onClick={loginHandle}>
              로그인
            </Button>
            <Button className={styles.button} onClick={() => navigate("/join")}>
              회원가입
            </Button>
          </Box>
        </Stack>
      </Box>
      <br />

      <Box sx={{}}>
        <Typography>소셜 로그인</Typography>
        <Stack direction='row' spacing={2}>
          <a href='http://localhost:8080/oauth2/authorization/naver'>
            <img className={styles.social_icon} src={naver_icon} alt='naver' />
          </a>
          <a href='http://localhost:8080/oauth2/authorization/google'>
            <img
              className={styles.social_icon}
              src={google_icon}
              alt='google'
            />
          </a>
          <a href='http://localhost:8080/oauth2/authorization/seung'>custom</a>
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginPage;
