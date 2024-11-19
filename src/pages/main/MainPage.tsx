import React from "react";
import { useAuthStore } from "../../store/useAuthStore";

const MainPage = () => {
  const { user, isAuthenticated } = useAuthStore();
  console.log(user);
  console.log(isAuthenticated);
  return <>main</>;
};

export default MainPage;
