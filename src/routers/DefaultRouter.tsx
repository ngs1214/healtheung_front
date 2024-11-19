import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import LoginPage from "../pages/login/LoginPage";
import MainPage from "../pages/main/MainPage";
import JoinPage from "../pages/join/JoinPage";
import AdminPage from "../pages/admin/AdminPage";
import AuthRouter from "./AuthRouter";
import SellPage from "../pages/shop/ShopPage";
import ShopPage from "../pages/shop/ShopPage";
import AboutPage from "../pages/about/AboutPage";

const DefaultRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/join' element={<JoinPage />} />
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route
          path='/admin'
          element={
            <AuthRouter redirectPath='/' hasRole='ROLE_ADMIN'>
              <AdminPage />
            </AuthRouter>
          }
        />
        <Route
          path='/sell'
          element={
            <AuthRouter redirectPath='/' hasRole='ROLE_SELLER'>
              <SellPage />
            </AuthRouter>
          }
        />
        <Route
          path='/about'
          element={
            <AuthRouter redirectPath='/'>
              <AboutPage />
            </AuthRouter>
          }
        />
        <Route
          path='/shop'
          element={
            <AuthRouter redirectPath='/'>
              <ShopPage />
            </AuthRouter>
          }
        />
        <Route
          path='/qna'
          element={
            <AuthRouter redirectPath='/'>
              <ShopPage />
            </AuthRouter>
          }
        />
      </Route>
    </Routes>
  );
};

export default DefaultRouter;
