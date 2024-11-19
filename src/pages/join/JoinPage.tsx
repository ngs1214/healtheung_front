import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./JoinPage.module.css";
import { AuthService } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

const JoinPage = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userBirth, setUserBirth] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [userGender, setUserGener] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [eMail, setEMail] = useState<string>("");

  const joinHandler = async () => {
    const data = {
      userId,
      password,
      userName,
      userBirth,
      nickName,
      userGender,
      phone,
      eMail,
      userRole: "ROLE_CONSUMER",
    };
    await AuthService.join(data)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Box className={styles.container}>
      <Stack>
        <Typography>회원가입</Typography>
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
        <TextField
          id='userName'
          label='userName'
          variant='outlined'
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <TextField
          id='userBirth'
          label='userBirth'
          variant='outlined'
          onChange={(e) => setUserBirth(e.target.value)}
          value={userBirth}
        />
        <TextField
          id='nickName'
          label='nickName'
          variant='outlined'
          onChange={(e) => setNickName(e.target.value)}
          value={nickName}
        />
        <RadioGroup
          row
          aria-labelledby='demo-row-radio-buttons-group-label'
          name='row-radio-buttons-group'
          onChange={(e) => setUserGener(e.target.value)}
          value={userGender}
        >
          <FormControlLabel value='M' control={<Radio />} label='남' />
          <FormControlLabel value='W' control={<Radio />} label='여' />
        </RadioGroup>
        <TextField
          id='phone'
          label='phone'
          variant='outlined'
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <TextField
          id='eMail'
          label='eMail'
          variant='outlined'
          onChange={(e) => setEMail(e.target.value)}
          value={eMail}
        />
        <Box>
          <Button onClick={joinHandler}>회원가입</Button>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            취소
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default JoinPage;
