import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import LoginPage from "../pages/login/LoginPage";
import MainPage from "../pages/main/MainPage";
import JoinPage from "../pages/join/JoinPage";
import AdminPage from "../pages/admin/AdminPage";
import AuthRouter from "./AuthRouter";
import SellPage from "../pages/sell/SellPage";
import BuyPage from "../pages/buy/BuyPage";

const DefaultRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/join' element={<JoinPage />} />
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<MainPage />} />
        <Route
          path='/sell'
          element={
            <AuthRouter redirectPath='/' hasRole='ROLE_SELLER'>
              <SellPage />
            </AuthRouter>
          }
        />
        <Route
          path='/buy'
          element={
            <AuthRouter redirectPath='/' hasRole='ROLE_CONSUMER'>
              <BuyPage />
            </AuthRouter>
          }
        />
        <Route
          path='/admin'
          element={
            <AuthRouter redirectPath='/' hasRole='ROLE_ADMIN'>
              <AdminPage />
            </AuthRouter>
          }
        />
      </Route>
    </Routes>
  );
};

export default DefaultRouter;
