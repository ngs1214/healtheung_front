import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import LoginPage from "../pages/login/LoginPage";
import MainPage from "../pages/main/MainPage";
import JoinPage from "../pages/join/JoinPage";
import ItemPage from "../pages/item/ItemPage";
import AdminPage from "../pages/admin/AdminPage";
import AuthRouter from "./AuthRouter";

const DefaultRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/join' element={<JoinPage />} />
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<MainPage />} />
        <Route
          path='/item'
          element={
            <AuthRouter redirectPath='/'>
              <ItemPage />
            </AuthRouter>
          }
        />
        <Route
          path='/admin'
          element={
            <AuthRouter redirectPath='/'>
              <AdminPage />
            </AuthRouter>
          }
        />
      </Route>
    </Routes>
  );
};

export default DefaultRouter;
